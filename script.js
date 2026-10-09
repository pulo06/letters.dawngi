const letters = {

    sister: {

        title: "A Little Reminder",

        text: `

            <p>Dear Dawngi,</p>

            <p>
                Even though you're my junior, somehow you've become someone I'm
                really close to, and I honestly love the little sisterly bond we
                have hehe.
            </p>

            <p>
                I love how comfortable we are around each other and how we can
                just talk, joke around, and be our silly selves. And of course,
                I can't forget you and Chamie always playing around and teasing
                each other. You two seriously act like actual siblings sometimes
                haha.
            </p>

            <p>
                I hope you always know that you have someone here who cares about
                you and will always be rooting for you. No matter how much we
                tease each other or how silly our conversations get, I'll always
                be happy to have you as my little sisterly friend.
            </p>

            <p>
                I'm really grateful for the bond we have, Dawngi, and I hope we
                stay this close for a really long time.
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>

        `
    },


    beautiful: {

        title: "Little Things I Like",

        text: `

            <p>Dear Dawngi,</p>

            <p>
                I don't think I tell you this enough, but you're really beautiful.
                And your hairrr, it's so pretty and so longgg, I honestly love it hehe.
            </p>

            <p>
                And since you're a law student, I already know who I'm calling
                when I get into trouble. I'll just be like, “Dawngi, please come
                fight for me in court” haha. So you better become a really good
                lawyer because I already have plans for you.
            </p>

            <p>
                But more than all that, I really like how sweet and kind you are.
                You're such a lovely person to have around, and I hope you never
                lose that sweetness in you.
            </p>

            <p>
                So yeah, just a little reminder that you're beautiful, you're
                doing great, and you're a really sweet person. Keep being you,
                Dawngi hehe.
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>

        `
    },


    faith: {

        title: "For Your Heart",

        text: `

            <p>Dear Dawngi,</p>

            <p>
                I hope you always remember that God is with you in every season
                of your life. As you go through new things, especially with your
                studies and everything that comes with growing up, I hope you
                never feel like you have to figure everything out on your own.
            </p>

            <p>
                When things get stressful or you feel unsure about your future,
                I hope you take a moment to pray and give those worries to God.
                He already knows where you're going, even when you don't know
                what comes next.
            </p>

            <p>
                I pray that God gives you wisdom in your studies, strength when
                things get difficult, and peace whenever you feel overwhelmed.
                I also pray that He guides you toward the right people and
                opportunities and keeps you grounded through everything.
            </p>

            <p>
                And Dawngi, I hope you never forget that God has a purpose for
                your life. Keep trusting Him, even when the path doesn't make
                sense yet. You don't have to know everything right now. Just
                keep walking with Him, one step at a time.
            </p>

            <p>
                I'll always be cheering you on, and I hope you continue growing
                into the person God has called you to be.
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>

        `
    }

};


const mailbox =
    document.getElementById("mailbox");

const lettersArea =
    document.getElementById("lettersArea");

const instruction =
    document.getElementById("instruction");

const overlay =
    document.getElementById("letterOverlay");

const closeLetter =
    document.getElementById("closeLetter");

const letterHeading =
    document.getElementById("letterHeading");

const letterBody =
    document.getElementById("letterBody");

const envelopes =
    document.querySelectorAll(".envelope");


let mailboxOpened = false;

let selectedLetter = false;


mailbox.addEventListener("click", () => {

    if (mailboxOpened) {
        return;
    }

    mailboxOpened = true;

    mailbox.classList.add("open");

    mailbox.classList.add("shake");

    setTimeout(() => {

        mailbox.classList.remove("shake");

    }, 700);


    instruction.innerHTML =
        "There are three letters inside.<br><strong>You can only choose one.</strong>";


    setTimeout(() => {

        lettersArea.classList.add("visible");


        envelopes.forEach((envelope, index) => {

            setTimeout(() => {

                envelope.classList.add("pop");

            }, index * 130);

        });

    }, 550);

});


envelopes.forEach(envelope => {

    envelope.addEventListener("click", () => {

        if (selectedLetter) {
            return;
        }

        selectedLetter = true;


        const key =
            envelope.dataset.letter;

        const letter =
            letters[key];


        if (!letter) {
            return;
        }


        letterHeading.textContent =
            letter.title;

        letterBody.innerHTML =
            letter.text;


        envelope.classList.add("selected");


        envelopes.forEach(other => {

            if (other !== envelope) {

                other.classList.add("locked");

            }

        });


        setTimeout(() => {

            overlay.classList.add("open");

        }, 200);

    });

});


closeLetter.addEventListener("click", () => {

    overlay.classList.remove("open");

});


overlay.addEventListener("click", event => {

    if (event.target === overlay) {

        overlay.classList.remove("open");

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        overlay.classList.remove("open");

    }

});


function createPetal() {

    const petal =
        document.createElement("div");

    petal.className = "petal";


    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.top =
        "-20px";


    const colors = [

        "#e7dda8",
        "#d8e1b9",
        "#f0e4b8",
        "#dce6c9",
        "#e9dfc0"

    ];


    petal.style.background =
        colors[
            Math.floor(
                Math.random() * colors.length
            )
        ];


    petal.style.animationDuration =
        (4 + Math.random() * 3) + "s";


    document.body.appendChild(petal);


    requestAnimationFrame(() => {

        petal.classList.add("active");

    });


    setTimeout(() => {

        petal.remove();

    }, 7500);

}


setInterval(() => {

    if (
        document.visibilityState === "visible"
    ) {

        createPetal();

    }

}, 2600);


setInterval(() => {

    if (
        !mailboxOpened &&
        document.visibilityState === "visible"
    ) {

        mailbox.animate(

            [

                {
                    transform:
                        "translateY(0) rotate(0deg)"
                },

                {
                    transform:
                        "translateY(-4px) rotate(-1deg)"
                },

                {
                    transform:
                        "translateY(0) rotate(0deg)"
                }

            ],

            {

                duration: 900,

                easing: "ease-in-out"

            }

        );

    }

}, 6000);
