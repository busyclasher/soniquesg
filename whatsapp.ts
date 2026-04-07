/** Default WhatsApp prefill for lesson enquiries (edit placeholders before sending). */
export const WHATSAPP_INQUIRY_MESSAGE = `Hi, I'm (Name). I'm interested in enquiring about music lessons at Sonique Studio!

Name of learner and age:

Type of instrument intended to learn: (Electric guitar/Acoustic Guitar/Violin/Piano)

Own the instrument?:
(Yes/No)

Goals for learning the instrument  (Eg play specific genres/songs, prepare for grading, learn as a hobby):

Prior music experience (If applicable)
(Eg music CCA, have grading, self-taught, learnt other instruments):

Preferred location:
(Central/East/West/North/North-East)

Anything else we should know?:`;

export const WHATSAPP_NUMBERS = {
  primary: '6598228518',
  alternate: '6591234567',
} as const;

export function waMeLink(phoneDigits: string, text: string = WHATSAPP_INQUIRY_MESSAGE): string {
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`;
}
