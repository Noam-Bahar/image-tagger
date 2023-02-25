export default function FileInput({ onChange }: { onChange: Function }) {
  return (
    <div
      onDragOver={(e: any) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        onChange(file);
      }}
      style={{
        border: 'dashed',
        borderRadius: '1rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <input
        type='file'
        onChange={(e) => onChange(e.target.files[0])}
        accept='image/*'
        style={{}}
      />
      <h3>Or drag the file and drop here</h3>
    </div>
  );
}
