import * as PIXI from 'pixi.js';

export default class CreditsPanel {
    constructor(credits, winSalary) {
        this.creditsPanelContainer = new PIXI.Container();
        this.creditsText = null;
        this.winSalaryText = null;
        this._createPanel(credits, winSalary)
    }

    _createPanel(credits, winSalary) {
        const Box = new PIXI.Graphics();
        Box.lineStyle(2, 0xBF6730, 1);
        Box.beginFill(0x061639, 1);
        Box.drawRoundedRect(0, 0, 200, 150);
        Box.pivot.set(Box.width / 2, Box.height / 2);
        Box.endFill();
        this.creditsPanelContainer.addChild(Box);

        this.creditsText = new PIXI.Text(`MONEY: ${credits}$`, {
            fontFamily: "Arial",
            fontSize: 16,
            fill: "yellow",
            dropShadow: true,
            dropShadowColor: "#ffffff",
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 3,
            dropShadowDistance: 3,
        });
        this.creditsText.anchor.set(0.5);
        this.creditsText.position.set(-20, -30);
        this.creditsPanelContainer.addChild(this.creditsText);

        this.winSalaryText = new PIXI.Text(`WIN: ${winSalary}$`, {
            fontFamily: "Arial",
            fontSize: 16,
            fill: "yellow",
            dropShadow: true,
            dropShadowColor: "#ffffff",
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 3,
            dropShadowDistance: 3,
        });
        this.winSalaryText.anchor.set(0.5);
        this.winSalaryText.position.set(-47, -5);
        this.creditsPanelContainer.addChild(this.winSalaryText);
    }

    setWinSalaryText(value) {
        this.winSalaryText.text = `WIN: ${value}$`;
    }
    setCreditsText(value) {
        this.creditsText.text = `MONEY: ${value}$`;
    }
    getCreditsPanelContainer() {
        return this.creditsPanelContainer;
    }
}