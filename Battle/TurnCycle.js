class TurnCycle {
  constructor({ battle, onNewEvent }) {
    this.battle = battle;
    this.onNewEvent = onNewEvent;
    this.currentTeam = "player"; // or "enemy"
  }

  async turn() {
    // Get the caster
    const casterId = this.battle.activeCombatants[this.currentTeam];
    const caster = this.battle.combatants[casterId];

    const enemyId = this.battle.activeCombatants[caster.team === "player" ? "enemy" : "player"];
    const enemy = this.battle.combatants[enemyId];

    const submission = await this.onNewEvent({
      type: "submissionMenu",
      caster,
      enemy
    })

    const resultingEvent = submission.action.success;
    for (let i = 0; i < resultingEvent.length; i++) {
      const event = {
        ...resultingEvent[i],
        submission,
        action: submission.action,
        caster,
        target: submission.target,
      }
      
    }
  }

   async init() {
    await this.onNewEvent({
      type: "textMessage",
      text: "The battle is starting!"
    })

    //Start the first turn!
    this.turn();
  }
}