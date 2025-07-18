import Image from "next/image";

export function AttachmentModal() {
  const options = [
    { label: "Photos", src: "/photo.svg" },
    { label: "Document", src: "/document.svg" },
    { label: "Camera", src: "/camera.svg" },
    { label: "Attach", src: "/attach.svg" },
  ];

  return (
    <div className="bg-[#F7F7FC] rounded-xl w-100 border border-[#D4206633] p-6 shadow-lg ">
      <div className="grid grid-cols-4 gap-6 ">
        {options.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center space-y-2"
          >
            <button
              className="
                bg-[#E9E9F7] flex justify-center items-center rounded-full w-14 h-14 aspect-square
                hover:bg-[#E0E0F0] transition
                transform hover:scale-110 active:scale-95
              "
            >
              <Image
                src={item.src}
                alt={item.label}
                width={28}
                height={28}
                className="object-contain"
              />
            </button>
            <span className="text-sm text-black font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
