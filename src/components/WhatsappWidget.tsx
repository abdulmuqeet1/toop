import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function WhatsappWidget({ className }: Props) {
  return (
    <div
      className={cn("z-10",  className)}
    >
      <img
        src="whatsapp.png"
        alt="WhatsApp"
        className="w-14 h-14 fixed bottom-5 right-5 cursor-pointer z-[1]"
      />
    </div>
  );
}
