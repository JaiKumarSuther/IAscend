export default function AboutMeSection() {
  return (
    <div className="rounded-xl py-6 text-black text-sm leading-relaxed space-y-4">
      {/* About Me */}
      <div>
        <h3 className="font-bold text-xl mb-2">About me</h3>
        <p className="text-[#505050] text-md">
          Practicing Doctor of Oriental Medicine with a focus on holistic health and healing.
          Founder of a wellness practice blending ancient healing methods with modern techniques.
          Yoga instructor and mental health advocate with a passion for mindfulness and stress relief.
        </p>
        <p className="text-[#505050] text-md">
          Currently providing services in yoga, fitness, mental health, and personalized wellness consultations.
          Contributor to wellness workshops and community health initiatives. Passionate about creating harmony between mind, body, and spirit.
        </p>
      </div>

      {/* Strengths */}
      <div className="text-[#505050] text-md">
        <h3 className="font-semibold text-xl mb-2 text-black">Strengths</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Holistic health strategies</li>
          <li>Yoga and mindfulness techniques</li>
          <li>Personalized fitness programs</li>
          <li>Mental health support and resilience building</li>
          <li>Bridging traditional practices with modern wellness innovations</li>
        </ul>
      </div>

      {/* Closing */}
      <p className="text-[#505050] text-md">
        Looking forward to supporting your health and wellness journey!
        I’m dedicated to helping people achieve balance and vitality in their lives.
        I also support community wellness programs that promote mental health and sustainable well-being.
      </p>
    </div>
  );
}
