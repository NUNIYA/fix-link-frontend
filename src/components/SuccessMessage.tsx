interface Props {
  message: string;
}

export default function SuccessMessage({ message }: Props) {
  if (!message) return null;

  return (
    <div className="rounded-md bg-green-50 p-3 text-sm text-green-600">
      {message}
    </div>
  );
}
