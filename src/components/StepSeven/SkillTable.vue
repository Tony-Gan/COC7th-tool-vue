<template>
  <table>
    <tr>
      <td class="table-title">会计</td>
      <td class="table-title">妙手</td>
      <td class="table-title">人类学</td>
      <td class="table-title">估价</td>
      <td class="table-title">炮术</td>
      <td class="table-title">魅惑</td>
      <td class="table-title">攀爬</td>
      <td class="table-title">计算机使用</td>
      <td class="table-title">信用</td>
      <td class="table-title">投掷</td>
      <td class="table-title">潜行</td>
      <td class="table-title">侦察</td>
    </tr>
    <tr>
      <td>{{ this.accounting }}</td>
      <td>{{ this.sleightOfHand }}</td>
      <td>{{ this.anthropology }}</td>
      <td>{{ this.appraise }}</td>
      <td>{{ this.artillery }}</td>
      <td>{{ this.charm }}</td>
      <td>{{ this.climb }}</td>
      <td>{{ this.computerUse }}</td>
      <td>{{ this.creditRating }}</td>
      <td>{{ this.throw }}</td>
      <td>{{ this.stealth }}</td>
      <td>{{ this.spotHidden }}</td>
    </tr>
    <tr>
      <td class="table-title">克苏鲁神话</td>
      <td class="table-title">爆破</td>
      <td class="table-title">乔装</td>
      <td class="table-title">潜水</td>
      <td class="table-title">闪避</td>
      <td class="table-title">汽车驾驶</td>
      <td class="table-title">电气维修</td>
      <td class="table-title">电子学</td>
      <td class="table-title">话术</td>
      <td class="table-title">追踪</td>
      <td class="table-title">说服</td>
      <td class="table-title">精神分析</td>
    </tr>
    <tr>
      <td>{{ this.cthulhuMythos }}</td>
      <td>{{ this.demolitions }}</td>
      <td>{{ this.disguise }}</td>
      <td>{{ this.diving }}</td>
      <td>{{ this.dodge }}</td>
      <td>{{ this.driveAuto }}</td>
      <td>{{ this.electricalRepair }}</td>
      <td>{{ this.electronics }}</td>
      <td>{{ this.fastTalk }}</td>
      <td>{{ this.track }}</td>
      <td>{{ this.persuade }}</td>
      <td>{{ this.psychoanalysis }}</td>
    </tr>
    <tr>
      <td class="table-title">急救</td>
      <td class="table-title">历史</td>
      <td class="table-title">催眠</td>
      <td class="table-title">恐吓</td>
      <td class="table-title">跳跃</td>
      <td class="table-title">母语</td>
      <td class="table-title">法律</td>
      <td class="table-title">图书馆使用</td>
      <td class="table-title">聆听</td>
      <td class="table-title">游泳</td>
      <td class="table-title">骑术</td>
      <td class="table-title">读唇</td>
    </tr>
    <tr>
      <td>{{ this.firstAid }}</td>
      <td>{{ this.history }}</td>
      <td>{{ this.hypnosis }}</td>
      <td>{{ this.intimidate }}</td>
      <td>{{ this.jump }}</td>
      <td>{{ this.languageOwn }}</td>
      <td>{{ this.law }}</td>
      <td>{{ this.libraryUse }}</td>
      <td>{{ this.listen }}</td>
      <td>{{ this.swim }}</td>
      <td>{{ this.ride }}</td>
      <td>{{ this.readLips }}</td>
    </tr>
    <tr>
      <td class="table-title">锁匠</td>
      <td class="table-title">心理学</td>
      <td class="table-title">机械维修</td>
      <td class="table-title">医学</td>
      <td class="table-title">博物学</td>
      <td class="table-title">领航</td>
      <td class="table-title">神秘学</td>
      <td class="table-title">操作重型机械</td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
    </tr>
    <tr>
      <td>{{ this.lockSmith }}</td>
      <td>{{ this.psychology }}</td>
      <td>{{ this.machenicalRepair }}</td>
      <td>{{ this.medicine }}</td>
      <td>{{ this.naturalWorld }}</td>
      <td>{{ this.navigation }}</td>
      <td>{{ this.occult }}</td>
      <td>{{ this.operateHeavyMachinery }}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="first-level">
      <td class="table-large-title">科学</td>
    </tr>
    <tr>
      <td class="table-title">天文学</td>
      <td class="table-title">生物学</td>
      <td class="table-title">植物学</td>
      <td class="table-title">化学</td>
      <td class="table-title">密码学</td>
      <td class="table-title">工程学</td>
      <td class="table-title">法医学</td>
      <td class="table-title">地质学</td>
      <td class="table-title">数学</td>
      <td class="table-title">气象学</td>
      <td class="table-title">药学</td>
      <td class="table-title">物理学</td>
    </tr>
    <tr>
      <td>{{ this.astronomy }}</td>
      <td>{{ this.biology }}</td>
      <td>{{ this.botany }}</td>
      <td>{{ this.chemistry }}</td>
      <td>{{ this.cryptography }}</td>
      <td>{{ this.engineering }}</td>
      <td>{{ this.forensic }}</td>
      <td>{{ this.geology }}</td>
      <td>{{ this.mathematics }}</td>
      <td>{{ this.meteorology }}</td>
      <td>{{ this.pharmacy }}</td>
      <td>{{ this.physics }}</td>
    </tr>
    <tr>
      <td class="table-title">动物学</td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
    </tr>
    <tr>
      <td>{{ this.zoology }}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
    </tr>
    <tr class="first-level">
      <td class="table-large-title">艺术与手艺</td>
    </tr>
    <tr>
      <td class="table-title">表演</td>
      <td class="table-title">农学</td>
      <td class="table-title">美术</td>
      <td class="table-title">锻造</td>
      <td class="table-title">乐器</td>
      <td class="table-title">文学</td>
      <td class="table-title">摄影</td>
      <td class="table-title">机械制图</td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
    </tr>
    <tr>
      <td>{{ this.acting }}</td>
      <td>{{ this.farming }}</td>
      <td>{{ this.fineArt }}</td>
      <td>{{ this.forgery }}</td>
      <td>{{ this.instrument }}</td>
      <td>{{ this.literature }}</td>
      <td>{{ this.photography }}</td>
      <td>{{ this.technicalDrawing }}</td>
      <td>{{}}</td>
      <td>{{}}</td>
    </tr>
    <tr class="first-level">
      <td class="table-large-title">格斗</td>
    </tr>
    <tr>
      <td class="table-title">斧</td>
      <td class="table-title">斗殴</td>
      <td class="table-title">链锯</td>
      <td class="table-title">连枷</td>
      <td class="table-title">绞</td>
      <td class="table-title">剑</td>
      <td class="table-title">鞭</td>
      <td class="table-title">矛</td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
    </tr>
    <tr>
      <td>{{ this.axe }}</td>
      <td>{{ this.brawl }}</td>
      <td>{{ this.chainsaw }}</td>
      <td>{{ this.flail }}</td>
      <td>{{ this.garrote }}</td>
      <td>{{ this.sword }}</td>
      <td>{{ this.whip }}</td>
      <td>{{ this.spear }}</td>
      <td>{{}}</td>
      <td>{{}}</td>
    </tr>
    <tr class="first-level">
      <td class="table-large-title">射击</td>
    </tr>
    <tr>
      <td class="table-title">弓</td>
      <td class="table-title">火焰喷射器</td>
      <td class="table-title">手枪</td>
      <td class="table-title">自动步枪</td>
      <td class="table-title">步枪</td>
      <td class="table-title">霰弹枪</td>
      <td class="table-title">半自动步枪</td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
    </tr>
    <tr>
      <td>{{ this.bow }}</td>
      <td>{{ this.flamethrower }}</td>
      <td>{{ this.handgun }}</td>
      <td>{{ this.machineGun }}</td>
      <td>{{ this.rifle }}</td>
      <td>{{ this.shotgun }}</td>
      <td>{{ this.submachineGun }}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
    </tr>
    <tr class="first-level">
      <td class="table-large-title">语言</td>
    </tr>
    <tr>
      <td class="table-title">拉丁语</td>
      <td class="table-title">希伯来语</td>
      <td class="table-title">其他外语</td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
    </tr>
    <tr>
      <td>{{ this.latin }}</td>
      <td>{{ this.hebrew }}</td>
      <td>{{ this.nonOwnLanguage }}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
    </tr>
    <tr class="first-level">
      <td class="table-large-title">驾驶</td>
    </tr>
    <tr>
      <td class="table-title">飞行器驾驶</td>
      <td class="table-title">船驾驶</td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
      <td class="table-title"></td>
    </tr>
    <tr>
      <td>{{ this.pilotAircraft }}</td>
      <td>{{ this.pilotBoat }}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
      <td>{{}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      accounting: localStorage.getItem("会计"),
      animalHandling: localStorage.getItem("动物驯养"),
      anthropology: localStorage.getItem("人类学"),
      appraise: localStorage.getItem("估价"),
      artillery: localStorage.getItem("炮术"),
      charm: localStorage.getItem("魅惑"),
      climb: localStorage.getItem("攀爬"),
      computerUse: localStorage.getItem("计算机使用"),
      creditRating: localStorage.getItem("信用"),
      cthulhuMythos: localStorage.getItem("克苏鲁神话"),
      demolitions: localStorage.getItem("爆破"),
      disguise: localStorage.getItem("乔装"),
      diving: localStorage.getItem("潜水"),
      dodge: localStorage.getItem("闪避"),
      driveAuto: localStorage.getItem("汽车驾驶"),
      electricalRepair: localStorage.getItem("电气维修"),
      electronics: localStorage.getItem("电子学"),
      fastTalk: localStorage.getItem("话术"),
      firstAid: localStorage.getItem("急救"),
      history: localStorage.getItem("历史"),
      hypnosis: localStorage.getItem("催眠"),
      intimidate: localStorage.getItem("恐吓"),
      jump: localStorage.getItem("跳跃"),
      languageOwn: localStorage.getItem("母语"),
      law: localStorage.getItem("法律"),
      libraryUse: localStorage.getItem("图书馆使用"),
      listen: localStorage.getItem("聆听"),
      lockSmith: localStorage.getItem("锁匠"),
      lore: localStorage.getItem("狂热"),
      machenicalRepair: localStorage.getItem("机械维修"),
      medicine: localStorage.getItem("医学"),
      naturalWorld: localStorage.getItem("博物学"),
      navigation: localStorage.getItem("领航"),
      occult: localStorage.getItem("神秘学"),
      operateHeavyMachinery: localStorage.getItem("操作重型机械"),
      persuade: localStorage.getItem("说服"),
      psychoanalysis: localStorage.getItem("精神分析"),
      psychology: localStorage.getItem("心理学"),
      readLips: localStorage.getItem("读唇"),
      ride: localStorage.getItem("骑术"),
      sleightOfHand: localStorage.getItem("妙手"),
      spotHidden: localStorage.getItem("侦察"),
      stealth: localStorage.getItem("潜行"),
      survival: localStorage.getItem("生存"),
      swim: localStorage.getItem("游泳"),
      throw: localStorage.getItem("投掷"),
      track: localStorage.getItem("追踪"),
      astronomy: localStorage.getItem("天文学"),
      biology: localStorage.getItem("生物学"),
      botany: localStorage.getItem("植物学"),
      chemistry: localStorage.getItem("化学"),
      cryptography: localStorage.getItem("密码学"),
      engineering: localStorage.getItem("工程学"),
      forensic: localStorage.getItem("法医学"),
      geology: localStorage.getItem("地质学"),
      mathematics: localStorage.getItem("数学"),
      meteorology: localStorage.getItem("气象学"),
      pharmacy: localStorage.getItem("药学"),
      physics: localStorage.getItem("物理学"),
      zoology: localStorage.getItem("动物学"),
      acting: localStorage.getItem("表演"),
      farming: localStorage.getItem("农学"),
      fineArt: localStorage.getItem("美术"),
      forgery: localStorage.getItem("锻造"),
      instrument: localStorage.getItem("乐器"),
      literature: localStorage.getItem("文学"),
      photography: localStorage.getItem("摄影"),
      technicalDrawing: localStorage.getItem("机械制图"),
      axe: localStorage.getItem("斧"),
      brawl: localStorage.getItem("斗殴"),
      chainsaw: localStorage.getItem("链锯"),
      flail: localStorage.getItem("连枷"),
      garrote: localStorage.getItem("绞"),
      sword: localStorage.getItem("剑"),
      whip: localStorage.getItem("鞭"),
      spear: localStorage.getItem("矛"),
      bow: localStorage.getItem("弓"),
      flamethrower: localStorage.getItem("火焰喷射器"),
      handgun: localStorage.getItem("手枪"),
      machineGun: localStorage.getItem("自动步枪"),
      rifle: localStorage.getItem("步枪"),
      shotgun: localStorage.getItem("霰弹枪"),
      submachineGun: localStorage.getItem("半自动步枪"),
      latin: localStorage.getItem("拉丁语"),
      hebrew: localStorage.getItem("希伯来语"),
      nonOwnLanguage: localStorage.getItem("其他外语"),
      pilotAircraft: localStorage.getItem("飞行器驾驶"),
      pilotBoat: localStorage.getItem("船驾驶"),
    };
  },
  beforeMount() {},
};
</script>
