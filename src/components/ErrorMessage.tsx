interface Props {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  if (!message) return null;

  return (
    <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
      {message}
    </div>
  );
}
