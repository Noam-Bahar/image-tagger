export default function InputGroup({
  label,
  onChange,
}: {
  label: string;
  onChange: Function;
}) {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <label htmlFor='apikey' style={{ flexShrink: 0 }}>
        {label}
      </label>
      <input
        type='text'
        id='apikey'
        style={{ width: '100%' }}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
