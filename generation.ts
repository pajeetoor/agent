// Response creation process
async utkrishtPratikriyaSrijan(
  bolneWale: Agent,
  baatcheet: AgentSambhaashan,
  tantraSoochna: string,
  sthiti: SambhaashanSthiti
): Promise<string> {
  // 1. Punarprayatn Yojna
  const adhiktamPunarprayatn = 3;

  // 2. Pratikriya Manjuri
  if (/^[\d.]+$/.test(pratikriya.trim())) {
    // Agar pratikriya kewal ek sankhya hai, to punarprayatn karein
    continue;
  }

  // 3. Sandarbh Sudharan
  tantraSoochna += 
    "\n\nMAHATVAPOORN: Apne charitra ke roop mein swabhavik roop se pratikriya dein. " +
    "Bhavana ankank ya visleshan pradarshit na karein. " +
    "Keval ek saamanya baatcheet karein.";

  // 4. Truti Prabandhan
  try {
    pratikriya = await this.sathSeva.pratikriyaSrijan(
      bolneWale,
      baatcheet.sandesh,
      tantraSoochna
    );
  } catch (truti) {
    // Truti ka samadhan aur punarprayatn
  }
}
