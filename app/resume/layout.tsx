import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resume",
  description: "View and download the professional resume of Saymon Hwaier, Software Engineer.",
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
