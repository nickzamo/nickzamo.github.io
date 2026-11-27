export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="bg-violet/20 absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full blur-[120px]" />
      <div className="bg-cyan/10 absolute top-1/3 -left-40 h-[26rem] w-[26rem] rounded-full blur-[120px]" />
    </div>
  );
}
