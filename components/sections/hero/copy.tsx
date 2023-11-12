import React from "react";

type CopyProps = {
  title: string;
  subtitle: string;
};

export default function Copy({ subtitle, title }: CopyProps) {
  return (
    <div className="absolute left-0 top-0 z-50 w-screen">
      <div
        className="flex h-screen w-full flex-col items-center justify-center "
        // initial={{ opacity: 0, y: -40 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{
        //   duration: 1.5,
        //   delay: index === 2 || index === 3 ? 5.5 : 0.5,
        // }}
        // viewport={{ once: false }}
      >
        <div className="relative flex flex-col items-center text-white">
          <p className="text-xl font-bold sm:text-3xl lg:text-5xl">{title}</p>
          <p className="text-sm sm:text-xl lg:text-2xl">{subtitle}</p>
          <div className="absolute inset-0 -z-10 bg-black/50 blur-3xl" />
        </div>
      </div>
    </div>
  );
}
