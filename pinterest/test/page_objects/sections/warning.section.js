class WarningSection {

    get warningHeading() {
        return $('//div[contains(@class, "ADXRXN CQ1_jt b6DHg3 kF2VEF")]//h1')
    }

    get resetButton() {
        return $('//div[contains(@class, "ADXRXN i1hWBD")]//button')
    }

    get gotitButton() {
        return $('//div[contains(@class, "ADXRXN LbyOQL")]//button')
    }

    async getWarningMessage() {
        return this.warningHeading.getText();
    }
}
export default new WarningSection()