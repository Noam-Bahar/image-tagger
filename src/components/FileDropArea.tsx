import { SyntheticEvent } from 'react';

export default function FileDropArea() {
  const onDragOver = (ev: DragEvent) => {
    ev.preventDefault();
    console.log('dragover');
    console.log(ev.dataTransfer);
  };
  const onDrop = (ev: DragEvent) => {
    console.log('drop');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === 'file') {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  };
  const onClick = () => {
    console.log('click');
  };

  return (
    <section
      onDragOver={onDragOver}
      onDrop={onDrop}
      style={{
        border: 'dashed',
        borderRadius: '1rem',
        padding: '1rem',
      }}
    >
      <button onClick={onClick}>+ Add File</button>
      <h3>Or drag the file and drop here</h3>
    </section>
  );
}
