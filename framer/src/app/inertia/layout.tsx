
export const metadata = {
  title: 'Inertia',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main lang="en">
      <section>{children}</section>
    </main>
  )
}
