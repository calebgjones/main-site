import { LoremIpsum } from "lorem-ipsum";

const Content = [
    {
        section: "section1",
        header: "Welcome!",
        body: "Welcome to my page!!! it's so epic!"
    },
    {
        section: "section2",
        header: "Test header 2",
        body: new LoremIpsum().generateParagraphs(2)
    },
    {
        section: "section3",
        header: "Test header 3",
        body: new LoremIpsum().generateParagraphs(1)
    }, 
    {
        section: "section4",
        header: "Test header 4",
        body: new LoremIpsum().generateParagraphs(1)
    },
    {
        section: "section5",
        header: "Test header 5",
        body: new LoremIpsum().generateParagraphs(1)
    },
    {
        section: "section6",
        header: "Test header 6",
        body: new LoremIpsum().generateParagraphs(1)
    },
    {
        section: "section7",
        header: "Test header 7",
        body: new LoremIpsum().generateParagraphs(1)
    },
    {
        section: "section8",
        header: "Test header 8",
        body: new LoremIpsum().generateParagraphs(1)
    },
    {
        section: "section9",
        header: "Test header 9",
        body: new LoremIpsum().generateParagraphs(3)
    }
];

export default Content;