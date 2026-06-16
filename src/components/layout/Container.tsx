/**
 * Standard page width wrapper
 */

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({
  children,
}: ContainerProps) {
  return (
    <div className="mx-auto max-w-content px-6 lg:px-10">
      {children}
    </div>
  );
}