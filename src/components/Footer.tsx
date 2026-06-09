export default function Footer() {
  return (
    <footer className="border-t-2 border-[#181512] px-5 py-8 dark:border-[#f8f1df]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <p className="text-sm font-black text-[#181512] dark:text-[#f8f1df]">
          Built like a field notebook. Shipped with curiosity.
        </p>
        <p className="text-sm font-bold text-[#181512]/50 dark:text-[#f8f1df]/50">
          © {new Date().getFullYear()} Vaidik Shah. No beige templates harmed.
        </p>
      </div>
    </footer>
  );
}
