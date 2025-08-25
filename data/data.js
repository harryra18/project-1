const quizQuestionsRaw = [
    { question: "What is the supreme law of the land?", correctAnswer: "The Constitution", incorrectAnswers: ["The Declaration of Independence", "The Bill of Rights", "The Articles of Confederation"] },
    { question: "What does the Constitution do?", correctAnswer: "All of the above", incorrectAnswers: ["Sets up the government", "Defines the government", "Protects basic rights of Americans"] },
    { question: "The idea of self-government is in the first three words of the Constitution. What are these words?", correctAnswer: "We the People", incorrectAnswers: ["Life, Liberty, and", "In God We", "All men are"] },
    { question: "What is an amendment?", correctAnswer: "A change to the Constitution", incorrectAnswers: ["A new law", "A court decision", "A presidential order"] },
    { question: "What do we call the first ten amendments to the Constitution?", correctAnswer: "The Bill of Rights", incorrectAnswers: ["The Articles", "The Preamble", "The Declaration"] },
    { question: "What is one right or freedom from the First Amendment?", correctAnswer: "All of the above", incorrectAnswers: ["Speech", "Religion", "Assembly"] },
    { question: "How many amendments does the Constitution have?", correctAnswer: "27", incorrectAnswers: ["10", "15", "33"] },
    { question: "What did the Declaration of Independence do?", correctAnswer: "Announced our independence from Great Britain", incorrectAnswers: ["Created the Constitution", "Established the Bill of Rights", "Founded the Supreme Court"] },
    { question: "What are two rights in the Declaration of Independence?", correctAnswer: "Life, liberty, and pursuit of happiness", incorrectAnswers: ["Freedom of speech and religion", "Right to vote and bear arms", "Right to trial and assembly"] },
    { question: "What is freedom of religion?", correctAnswer: "You can practice any religion, or not practice a religion", incorrectAnswers: ["You must practice Christianity", "You cannot practice religion", "You must choose one religion"] },
    { question: "What is the economic system in the United States?", correctAnswer: "Capitalist economy", incorrectAnswers: ["Socialist economy", "Communist economy", "Feudal economy"] },
    { question: "What is the 'rule of law'?", correctAnswer: "Everyone must follow the law", incorrectAnswers: ["Only citizens follow the law", "Laws can be ignored", "Leaders are above the law"] },
    { question: "Name one branch or part of the government.", correctAnswer: "All of the above", incorrectAnswers: ["Congress", "Executive", "Judicial"] },
    { question: "What stops one branch of government from becoming too powerful?", correctAnswer: "Checks and balances", incorrectAnswers: ["The Constitution", "The President", "Congress"] },
    { question: "Who is in charge of the executive branch?", correctAnswer: "The President", incorrectAnswers: ["Congress", "The Supreme Court", "The Vice President"] },
    { question: "Who makes federal laws?", correctAnswer: "Congress", incorrectAnswers: ["The President", "The Supreme Court", "The states"] },
    { question: "What are the two parts of the U.S. Congress?", correctAnswer: "The Senate and House of Representatives", incorrectAnswers: ["The President and Vice President", "Democrats and Republicans", "Federal and State"] },
    { question: "How many U.S. Senators are there?", correctAnswer: "100", incorrectAnswers: ["50", "435", "538"] },
    { question: "We elect a U.S. Senator for how many years?", correctAnswer: "6", incorrectAnswers: ["2", "4", "8"] },
    { question: "The House of Representatives has how many voting members?", correctAnswer: "435", incorrectAnswers: ["100", "538", "50"] },
    { question: "We elect a U.S. Representative for how many years?", correctAnswer: "2", incorrectAnswers: ["4", "6", "8"] },
    { question: "Who does a U.S. Senator represent?", correctAnswer: "All people of the state", incorrectAnswers: ["Only people who voted for them", "Only their political party", "Only their district"] },
    { question: "Why do some states have more Representatives than other states?", correctAnswer: "Because of the state's population", incorrectAnswers: ["Because of the state's size", "Because of the state's wealth", "Because of the state's age"] },
    { question: "We elect a President for how many years?", correctAnswer: "4", incorrectAnswers: ["2", "6", "8"] },
    { question: "In what month do we vote for President?", correctAnswer: "November", incorrectAnswers: ["October", "December", "September"] },
    { question: "If the President can no longer serve, who becomes President?", correctAnswer: "The Vice President", incorrectAnswers: ["The Speaker of the House", "The Chief Justice", "The Secretary of State"] },
    { question: "If both the President and the Vice President can no longer serve, who becomes President?", correctAnswer: "The Speaker of the House", incorrectAnswers: ["The Chief Justice", "The Secretary of State", "The President Pro Tempore"] },
    { question: "Who is the Commander in Chief of the military?", correctAnswer: "The President", incorrectAnswers: ["The Secretary of Defense", "The Chairman of Joint Chiefs", "Congress"] },
    { question: "Who signs bills to become laws?", correctAnswer: "The President", incorrectAnswers: ["Congress", "The Supreme Court", "The Vice President"] },
    { question: "Who vetoes bills?", correctAnswer: "The President", incorrectAnswers: ["Congress", "The Supreme Court", "The Vice President"] },
    { question: "What does the President's Cabinet do?", correctAnswer: "Advises the President", incorrectAnswers: ["Makes laws", "Interprets laws", "Enforces state laws"] },
    { question: "What are two Cabinet-level positions?", correctAnswer: "Secretary of State and Secretary of Defense", incorrectAnswers: ["Governor and Mayor", "Senator and Representative", "Judge and Sheriff"] },
    { question: "What does the judicial branch do?", correctAnswer: "Reviews laws", incorrectAnswers: ["Makes laws", "Enforces laws", "Writes laws"] },
    { question: "What is the highest court in the United States?", correctAnswer: "The Supreme Court", incorrectAnswers: ["The Federal Court", "The District Court", "The Appeals Court"] },
    { question: "How many justices are on the Supreme Court?", correctAnswer: "9", incorrectAnswers: ["7", "11", "12"] },
    { question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?", correctAnswer: "To declare war", incorrectAnswers: ["To issue driver's licenses", "To run schools", "To perform marriages"] },
    { question: "Under our Constitution, some powers belong to the states. What is one power of the states?", correctAnswer: "Provide schooling and education", incorrectAnswers: ["Print money", "Declare war", "Make treaties"] },
    { question: "What are the two major political parties in the United States?", correctAnswer: "Democratic and Republican", incorrectAnswers: ["Liberal and Conservative", "Federal and State", "Progressive and Traditional"] },
    { question: "There are four amendments to the Constitution about who can vote. Describe one of them.", correctAnswer: "Citizens eighteen and older can vote", incorrectAnswers: ["Only men can vote", "Only property owners can vote", "Only educated people can vote"] },
    { question: "What is one responsibility that is only for United States citizens?", correctAnswer: "Serve on a jury", incorrectAnswers: ["Pay taxes", "Obey laws", "Go to school"] },
    { question: "Name one right only for United States citizens.", correctAnswer: "Vote in a federal election", incorrectAnswers: ["Freedom of speech", "Freedom of religion", "Right to bear arms"] },
    { question: "What are two rights of everyone living in the United States?", correctAnswer: "Freedom of expression and freedom of speech", incorrectAnswers: ["Right to vote and run for office", "Right to free healthcare", "Right to free education"] },
    { question: "What do we show loyalty to when we say the Pledge of Allegiance?", correctAnswer: "The United States", incorrectAnswers: ["The President", "Congress", "The military"] },
    { question: "What is one promise you make when you become a United States citizen?", correctAnswer: "Defend the Constitution and laws of the United States", incorrectAnswers: ["Never leave the country", "Always vote Republican", "Serve in the military for 4 years"] },
    { question: "How old do citizens have to be to vote for President?", correctAnswer: "18", incorrectAnswers: ["16", "21", "25"] },
    { question: "What are two ways that Americans can participate in their democracy?", correctAnswer: "Vote and join a political party", incorrectAnswers: ["Pay taxes and obey laws", "Go to school and work", "Watch TV and read newspapers"] },
    { question: "When is the last day you can send in federal income tax forms?", correctAnswer: "April 15", incorrectAnswers: ["December 31", "January 31", "March 15"] },
    { question: "When must all men register for the Selective Service?", correctAnswer: "At age 18", incorrectAnswers: ["At age 16", "At age 21", "When they graduate high school"] },
    { question: "What is one reason colonists came to America?", correctAnswer: "Freedom", incorrectAnswers: ["Gold", "Adventure", "Fame"] },
    { question: "Who lived in America before the Europeans arrived?", correctAnswer: "American Indians", incorrectAnswers: ["Spanish explorers", "French traders", "Vikings"] },
    { question: "What group of people was taken to America and sold as slaves?", correctAnswer: "Africans", incorrectAnswers: ["Europeans", "Asians", "Native Americans"] },
    { question: "Why did the colonists fight the British?", correctAnswer: "Because of high taxes", incorrectAnswers: ["Because of religious differences", "Because of language barriers", "Because of territorial disputes"] },
    { question: "Who wrote the Declaration of Independence?", correctAnswer: "Thomas Jefferson", incorrectAnswers: ["George Washington", "Benjamin Franklin", "John Adams"] },
    { question: "When was the Declaration of Independence adopted?", correctAnswer: "July 4, 1776", incorrectAnswers: ["July 4, 1775", "July 4, 1777", "July 4, 1783"] },
    { question: "There were 13 original states. Name three.", correctAnswer: "Virginia, Massachusetts, Pennsylvania", incorrectAnswers: ["Texas, California, Florida", "Alaska, Hawaii, Montana", "Ohio, Illinois, Wisconsin"] },
    { question: "What happened at the Constitutional Convention?", correctAnswer: "The Constitution was written", incorrectAnswers: ["The Declaration was signed", "The war was ended", "The President was elected"] },
    { question: "When was the Constitution written?", correctAnswer: "1787", incorrectAnswers: ["1776", "1789", "1791"] },
    { question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.", correctAnswer: "James Madison", incorrectAnswers: ["Thomas Jefferson", "George Washington", "Samuel Adams"] },
    { question: "What is one thing Benjamin Franklin is famous for?", correctAnswer: "U.S. diplomat", incorrectAnswers: ["First President", "Wrote the Constitution alone", "Led the army"] },
    { question: "Who is the 'Father of Our Country'?", correctAnswer: "George Washington", incorrectAnswers: ["Thomas Jefferson", "Benjamin Franklin", "John Adams"] },
    { question: "Who was the first President?", correctAnswer: "George Washington", incorrectAnswers: ["John Adams", "Thomas Jefferson", "Benjamin Franklin"] },
    { question: "What territory did the United States buy from France in 1803?", correctAnswer: "The Louisiana Territory", incorrectAnswers: ["The Florida Territory", "The Texas Territory", "The California Territory"] },
    { question: "Name one war fought by the United States in the 1800s.", correctAnswer: "The Civil War", incorrectAnswers: ["World War I", "World War II", "Korean War"] },
    { question: "Name the U.S. war between the North and the South.", correctAnswer: "The Civil War", incorrectAnswers: ["The Revolutionary War", "The War of 1812", "The Spanish-American War"] },
    { question: "Name one problem that led to the Civil War.", correctAnswer: "Slavery", incorrectAnswers: ["Taxation", "Religious differences", "Language barriers"] },
    { question: "What was one important thing that Abraham Lincoln did?", correctAnswer: "Freed the slaves", incorrectAnswers: ["Founded the Republican Party", "Built the railroads", "Discovered gold"] },
    { question: "What did the Emancipation Proclamation do?", correctAnswer: "Freed the slaves", incorrectAnswers: ["Ended the war", "Created new states", "Established voting rights"] },
    { question: "What did Susan B. Anthony do?", correctAnswer: "Fought for women's rights", incorrectAnswers: ["Led the Underground Railroad", "Founded the Red Cross", "Invented the telephone"] },
    { question: "Name one war fought by the United States in the 1900s.", correctAnswer: "World War II", incorrectAnswers: ["The Civil War", "The Revolutionary War", "The War of 1812"] },
    { question: "Who was President during World War I?", correctAnswer: "Woodrow Wilson", incorrectAnswers: ["Theodore Roosevelt", "William Taft", "Warren Harding"] },
    { question: "Who was President during the Great Depression and World War II?", correctAnswer: "Franklin Roosevelt", incorrectAnswers: ["Theodore Roosevelt", "Harry Truman", "Herbert Hoover"] },
    { question: "Who did the United States fight in World War II?", correctAnswer: "Japan, Germany, and Italy", incorrectAnswers: ["Russia, China, and France", "England, Spain, and Mexico", "Canada, Brazil, and Australia"] },
    { question: "Before he was President, Eisenhower was a general. What war was he in?", correctAnswer: "World War II", incorrectAnswers: ["World War I", "Korean War", "Vietnam War"] },
    { question: "During the Cold War, what was the main concern of the United States?", correctAnswer: "Communism", incorrectAnswers: ["Fascism", "Terrorism", "Economic depression"] },
    { question: "What movement tried to end racial discrimination?", correctAnswer: "Civil rights movement", incorrectAnswers: ["Women's rights movement", "Labor movement", "Environmental movement"] },
    { question: "What did Martin Luther King, Jr. do?", correctAnswer: "Fought for civil rights", incorrectAnswers: ["Led labor unions", "Fought in wars", "Founded universities"] },
    { question: "What major event happened on September 11, 2001, in the United States?", correctAnswer: "Terrorists attacked the United States", incorrectAnswers: ["A major earthquake occurred", "A hurricane hit the East Coast", "The stock market crashed"] },
    { question: "Name one American Indian tribe in the United States.", correctAnswer: "Cherokee", incorrectAnswers: ["Aztec", "Inca", "Maya"] },
    { question: "Name one of the two longest rivers in the United States.", correctAnswer: "Mississippi River", incorrectAnswers: ["Colorado River", "Rio Grande", "Hudson River"] },
    { question: "What ocean is on the West Coast of the United States?", correctAnswer: "Pacific Ocean", incorrectAnswers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"] },
    { question: "What ocean is on the East Coast of the United States?", correctAnswer: "Atlantic Ocean", incorrectAnswers: ["Pacific Ocean", "Indian Ocean", "Arctic Ocean"] },
    { question: "Name one U.S. territory.", correctAnswer: "Puerto Rico", incorrectAnswers: ["Cuba", "Jamaica", "Bahamas"] },
    { question: "Name one state that borders Canada.", correctAnswer: "Washington", incorrectAnswers: ["California", "Nevada", "Oregon"] },
    { question: "Name one state that borders Mexico.", correctAnswer: "Texas", incorrectAnswers: ["Louisiana", "Oklahoma", "Colorado"] },
    { question: "What is the capital of the United States?", correctAnswer: "Washington, D.C.", incorrectAnswers: ["New York City", "Philadelphia", "Boston"] },
    { question: "Where is the Statue of Liberty?", correctAnswer: "New York Harbor", incorrectAnswers: ["Washington, D.C.", "Boston Harbor", "San Francisco Bay"] },
    { question: "Why does the flag have 13 stripes?", correctAnswer: "Because there were 13 original colonies", incorrectAnswers: ["Because there were 13 signers", "Because there were 13 years of war", "Because there were 13 founding fathers"] },
    { question: "Why does the flag have 50 stars?", correctAnswer: "Because there are 50 states", incorrectAnswers: ["Because there are 50 senators", "Because there were 50 signers", "Because there are 50 capitals"] },
    { question: "What is the name of the national anthem?", correctAnswer: "The Star-Spangled Banner", incorrectAnswers: ["America the Beautiful", "God Bless America", "My Country 'Tis of Thee"] },
    { question: "When do we celebrate Independence Day?", correctAnswer: "July 4", incorrectAnswers: ["July 14", "August 4", "June 4"] },
    { question: "Name two national U.S. holidays.", correctAnswer: "Christmas and New Year's Day", incorrectAnswers: ["Easter and Halloween", "Valentine's Day and St. Patrick's Day", "Mother's Day and Father's Day"] },
    { question: "What is the introduction to the Constitution called?", correctAnswer: "The Preamble", incorrectAnswers: ["The Introduction", "The Beginning", "The Opening"] },
    { question: "What are the first 10 amendments called?", correctAnswer: "The Bill of Rights", incorrectAnswers: ["The Constitution", "The Declaration", "The Articles"] },
    { question: "What is the capital city of your country?", correctAnswer: "Washington, D.C.", incorrectAnswers: ["New York", "Boston", "Philadelphia"] },
    { question: "How many branches of government are there?", correctAnswer: "3", incorrectAnswers: ["2", "4", "5"] },
    { question: "What is the longest river in the United States?", correctAnswer: "Missouri River", incorrectAnswers: ["Mississippi River", "Colorado River", "Rio Grande"] },
    { question: "Which amendment gave women the right to vote?", correctAnswer: "19th Amendment", incorrectAnswers: ["15th Amendment", "20th Amendment", "18th Amendment"] },
    { question: "What is the minimum age to run for President?", correctAnswer: "35", incorrectAnswers: ["30", "40", "25"] },
    { question: "How long is a Presidential term?", correctAnswer: "4 years", incorrectAnswers: ["2 years", "6 years", "8 years"] },
    { question: "What is the maximum number of terms a President can serve?", correctAnswer: "2", incorrectAnswers: ["1", "3", "4"] },
    { question: "What document declared American independence?", correctAnswer: "Declaration of Independence", incorrectAnswers: ["Constitution", "Bill of Rights", "Articles of Confederation"] }
];


function shuffleArray(array) {
    let newArray = [...array];

    for (let i = 0; i < newArray.length; i++) {
        let randomIndex = Math.floor(Math.random() * newArray.length);

        let temp = newArray[i];
        newArray[i] = newArray[randomIndex];
        newArray[randomIndex] = temp;
    }

    return newArray;
}

function prepareQuestions() {
    let gameQuestions = [];

    for (let i = 0; i < quizQuestionsRaw.length; i++) {
        let q = quizQuestionsRaw[i];

        let allAnswers = [q.correctAnswer, ...q.incorrectAnswers];

        let shuffledAnswers = shuffleArray(allAnswers);

        let correctIndex = shuffledAnswers.indexOf(q.correctAnswer);

        gameQuestions.push({
            question: q.question,
            options: shuffledAnswers,
            correct: correctIndex
        });
    }

    return gameQuestions;
}

const quizQuestions = prepareQuestions();