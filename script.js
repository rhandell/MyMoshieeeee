const text =
`Another month, another memories mosh satin.

Thank you mosh sa araw araw na pagmamahal
na binibigay mo sakin at sa pag-intindi mo
sakin kahit na ang kapalit nito ay ang
pagiging sakit sa ulo sayo mosh.

Always remember na MAHAL NA MAHAL KITA.
Natry ko ang aking best para masuklian ko
ang iyong pagmamahal na binibigay mo sakin.

This is all my effort to give you
sa simple present.

ILOVEYOU MOSH ALWAYS 💜💜💜
HAPPY MONTHSARY ULE MOSH ILOVEYOU 🌸`;

let i = 0;

function typeWriter() {

    if (i < text.length) {

        document.getElementById("typingText").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 35);
    }
}

function openEnvelope() {

    document.getElementById("envelope").classList.add("open");

    setTimeout(() => {

        document.getElementById("message").style.display = "block";

        typeWriter();

    }, 1200);
}
