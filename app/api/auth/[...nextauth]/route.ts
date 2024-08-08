import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { db } from "@/app/lib/db";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const email = user.email ?? "";
      const name = user.name ?? "";
      const image = user.image ?? "";

      const existUser = await db.user.findUnique({
        where: {
          email,
        },
      });
      if (existUser) return true;

      const newUser = await db.user.create({
        data: { email, name, image },
      });
      if (newUser) return true;
      return false;
    },

    async session({ session }) {
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
