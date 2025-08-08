export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="welcome-page-container">
      {children}
    </div>
  );
}