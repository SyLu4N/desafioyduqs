interface LinkNavProps {
  text: string;
  url: string;
}

export function LinkNav({ text, url }: LinkNavProps) {
  return (
    <div className="max-w-[250px]">
      <a href={url}>{text}</a>
    </div>
  );
}
