function areaOfTriangle() {
    let side1 = 7;
    let side2 = 6;
    let side3 = 5;

    let generalFormula = (side1 + side2 + side3) / 2;
    let area = (generalFormula * (generalFormula-side1) * (generalFormula-side2) * (generalFormula-side3));
    let sqr = Math.sqrt(area);
    let integer = Math.round(sqr);
    document.getElementById('answer').innerHTML = integer;
}