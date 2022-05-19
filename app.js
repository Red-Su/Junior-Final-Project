function test() {
    document.getElementById("explode").style.visibility = "visible";
}
function random() {
    var x =  Math.floor(Math.random() * 16);
    switch (x) {
        case 0: 
            return "A good magician's assistant is hard to find. They're highly sawed after."
        case 1:
            return "The magician was sad he'd failed at his trick. He became a wand erring soul."
        case 2:
            return "The magician was unrecognisable in the street. He always kept his hoodini up."
        case 3:
            return "The magician got so angry he pulled his hair out."
        case 4:
            return "Harry Houdini used to use lots of trap doors in his magic act. He's stopped now, he was just going through a stage."         
        case 5:
            return "The chocolate magician performed a lot of Twix."   
        case 6:
            return `I asked why the magician was late to the party. He said, "bewitcha in a minute!"`
        case 7:
            return "I never saw the magician's spell book. He kept it under warlock and key."
        case 8:
            return "The magician was worried about his garden after the summer. He'd been going through a dry spell."
        case 9:
            return "Last week I saw a magician walk down the street. He turned into a drugstore."
        case 10:
            return "If I want to be a good magician I really have to pocus on my craft."
        case 11:
            return "The witch hated riding her broomstick on a cold night. She just went out for a short spell."
        case 12:
            return `There's a sign outside the witch's house on my street. "Witches parking only! All others will be toad."`
        case 13:
            return "I went to witch school when I was a kid. I didn't love it, all we did was spelling."
        case 14:
            return "Be careful of angry witches. They tend to fly off the handle."
        case 15:
            return "Witches don't really like martial arts. The only exception is taekwando."
    }
}

const app = Vue.createApp ({
    data() {
        return {
            pun: random()
        }
    }
})

app.mount('#app')
