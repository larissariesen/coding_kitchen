let subPages = [
    {title: "Seven Segment Display", href: "01_sevenSegmentDisplay/sevenSegmentDisplay.html"},
    {title: "TaskList", href: "02_tasklist/taskList.html"},
    {title: "Quiz", href: "03_quiz/quiz.html"},
    {title: "Binoxxo", href: "04_binoxxo/binoxxo.html"},
    {title: "Bad UX", href: "05_badUX/badUX.html"},
    {title: "Navigation", href: "06_tabbing/tabbing.html"},
    {title: "Snap Scrolling", href: "07_snapScrolling/snapScrolling.html"},
    {title: "Animation", href: "08_animation/animation.html"},
    {title: "My lessons learned", href: "09_lessonsLearned/lessons_learned.html"},
]

const showSubPageCard = () => {
    let subPagesDiv = document.getElementsByClassName("subPages")[0];
    subPagesDiv.innerHTML = '';
    subPages.forEach(subPage => {
        const subPageElement = createSubPageCard(subPage);
        subPagesDiv.appendChild(subPageElement)
    })
}

const createSubPageCard = (subPage) => {
    const aElement = document.createElement('a');
    aElement.href = subPage.href;
    aElement.textContent = subPage.title;

    return aElement;
}

window.onload = () => {
    showSubPageCard()
}