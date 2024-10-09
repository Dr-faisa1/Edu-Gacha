// قائمة المكافآت ونسب السحب
const rewards = [
  { name: "قلم مميز", rarity: "common", chance: 70 },
  { name: "كتيب تعليمي", rarity: "rare", chance: 20 },
  { name: "لعبة تعليمية", rarity: "rare", chance: 10 },
  { name: "رحلة إلى متحف", rarity: "legendary", chance: 5 },
  { name: "مجموعة تجارب علمية", rarity: "legendary", chance: 2 }
];

// الوظيفة التي تقوم بالسحب
function getRandomReward() {
  const random = Math.random() * 100;
  let accumulatedChance = 0;

  for (const reward of rewards) {
    accumulatedChance += reward.chance;
    if (random <= accumulatedChance) {
      return reward.name;
    }
  }
}

// التعامل مع الضغط على زر السحب
document.getElementById("gachaButton").addEventListener("click", function() {
  const reward = getRandomReward();
  document.getElementById("rewardDisplay").innerText = `حصلت على: ${reward}`;
});
