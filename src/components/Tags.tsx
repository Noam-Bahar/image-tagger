import { toast } from 'react-toastify';

export default function Tags({ children }: { children: string[] }) {
  const onCopyAll = () => {
    navigator.clipboard.writeText(children.join(', '));
    toast('📋 Copied all tags to clipboard');
  };
  const onCopyOne = (tag: string) => {
    navigator.clipboard.writeText(tag);
    toast(`📋 Copied "${tag}" to clipboard`);
  };
  return (
    <>
      {!!children?.length && <button onClick={onCopyAll}>Copy all</button>}
      <div>
        {children?.map((tag) => {
          return (
            <button
              key={crypto.randomUUID()}
              style={{ margin: '0.25rem' }}
              onClick={() => onCopyOne(tag)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </>
  );
}
