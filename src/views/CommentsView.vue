<template>
  <div class="comments-page">
    <header class="comments-hero">
      <h1>💬 User Comments</h1>
      <p>Explore reader thoughts from around the world.</p>
    </header>

    <section class="comments-list">
      <div 
        v-for="comment in comments" 
        :key="comment.id" 
        class="comment-card"
      >
        <h3>{{ comment.name }}</h3>
        <p class="email">{{ comment.email }}</p>
        <p class="message">"{{ comment.body }}"</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CommentsView",
  data() {
    return {
      comments: [
        {
          postId: 1,
          id: 1,
          name: "That labor from and how labors",
          email: "Eliseo@gardner.biz",
          body: "For those who praise as if it is indeed a great pleasure themselves, the time when they are in need of pain, but as if they reject and accuse wisely.",
        },
        {
          postId: 1,
          id: 2,
          name: "Jane Doe",
          email: "jane@example.com",
          body: "This site is amazing! It helped me pick my next self-help read.",
        },
        {
          postId: 2,
          id: 3,
          name: "Mark Smith",
          email: "mark@example.com",
          body: "The design is simple but elegant, and I love the book categories.",
        },
        {
          postId: 3,
          id: 4,
          name: "Lucy Brown",
          email: "lucy@example.com",
          body: "Thanks for including my favorite romance book!",
        },
        {
    "postId": 1,
    "id": 4,
    "name": "alias hate",
    "email": "Lew@alysha.tv",
    "body": "not and atque\noblind deserts which accusers wherefore hates us who pleasure\nbecause pleasure results in pain\net who are delighted with things as blinded"
  },
  {
    "postId": 1,
    "id": 5,
    "name": "and indeed, something of pain and guilt",
    "email": "Hayden@althea.biz",
    "body": "these are not as if and reason\time right from pleasures in reason\ntheir architect flees inventor greed\npleasures great where and"
  },
  {
    "postId": 2,
    "id": 6,
    "name": "and flees from choosing those who are indeed gentle, but who are nothing",
    "email": "Presley.Mueller@myrl.com",
    "body": "pains but who is the fault of deserting those who are present?\naccusing ourselves fleeing words\npleasure of things as pleasure but\npleasure repelled aspernate pain in"
  },
  {
    "postId": 2,
    "id": 7,
    "name": "repels the consequences of present or lesser annoyances of pleasures",
    "email": "Dallas@ole.me",
    "body": "greater but pains similar to labor and inventor and\nquasi times to be are that and\neos pleasure some\nasomething reason body discomfort softness because and great pain"
  },
  {
    "postId": 2,
    "id": 8,
    "name": "and all pain",
    "email": "Mallory_Kunze@marie.org",
    "body": "as the pleasure of the corrupt wants\nad pleasure greater\and unless he wants, we accuse greater\npleasures because something any and all"
  },
  {
    "postId": 2,
    "id": 9,
    "name": "pleasure will provide that",
    "email": "Meghan_Littel@rene.us",
    "body": "I will wisely assume the discomfort and the distinction of labors I will open and from that all blinded despise hates the thing expedited sometimes for itself less"
  },
  {
    "postId": 2,
    "id": 10,
    "name": "and it is both gentle and held as which as",
    "email": "Carmen_Keeling@caroline.name",
    "body": "who can blame us for our just pleasure, for he loves nothing, because he wants what pains and does not seek them, because he seeks nothing for our necessities, and we accuse him unless he is easy"
  },
  {
    "postId": 3,
    "id": 11,
    "name": "it flees from labor because the softnesses which they abandon are ours",
    "email": "Veronica_Goodwin@timmothy.net",
    "body": "as our pains are because either it is\nfuga is inventor or choose to explain who is blinded by the blinding that repels the born where it is\nut flattery because as or as greater than it"
  },
  {
    "postId": 3,
    "id": 12,
    "name": "ways that they pain him for pain",
    "email": "Oswald.Vandervort@leanne.org",
    "body": "expedita maiors dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati razone eius rem velit"
  },
  {
    "postId": 3,
    "id": 13,
    "name": "or the inventor may not be born, let the pleasure of life be wise",
    "email": "Kariane@jadyn.tv",
    "body": "flee those who pain things\ninventor body exercise\nbody desire and abandon is rejected but who blame\neum greater body and"
  },
  {
    "postId": 3,
    "id": 14,
    "name": "and the duties of that present here or herself of repudiating the pain",
    "email": "Nathan@solon.io",
    "body": "or what pleasure who exercises\npleasures whence but\nminimal and who despises it\nexpedite great praisers and and seeks as who pains"
  },
  {
    "postId": 3,
    "id": 15,
    "name": "he hates great debts here or is held by any of us",
    "email": "Maynard.Hodkiewicz@roberta.com",
    "body": "nothing like pleasures flatteries but hatred words of things\nany often and is\nare as if no one praises abandon\ntroublesome times where because"
  },
  {
    "postId": 4,
    "id": 16,
    "name": "in times of suffering, the choice is made by reason of pain",
    "email": "Christine@ayana.info",
    "body": "this one that labors something wants to do therefore\nwhat as loose said pleasure\nerror time or and\nfollow rejecting worthy expedite result free but flee easy"
  },
  {
    "postId": 4,
    "id": 17,
    "name": "who is this soul",
    "email": "Preston_Hudson@blaise.tv",
    "body": "consequatur necessitatis tota sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\doloribibus odio qui non labore"
  },
  {
    "postId": 4,
    "id": 18,
    "name": "or and we are bound to lead him or nothing from",
    "email": "Vincenza_Klocko@albertha.name",
    "body": "truth's pleasures are greater than necessities, and exercise is loved and no pleasure is great labors, great as annoyances"
  },
  {
    "postId": 4,
    "id": 19,
    "name": "but it hinders things because and and the inventor from where duties",
    "email": "Madelynn.Gorczany@darion.biz",
    "body": "pain is that but the smallest I will open\nut most worthy accusers time and and or annoyance\ngreat as accuse pleasure which as pleasures\nany further but architect as"
  },
  {
    "postId": 4,
    "id": 20,
    "name": "discomforts, ease, this something, pleasures",
    "email": "Mariana_Orn@preston.org",
    "body": "whoever follows these things should avoid choosing to endure but we lead to more painful and harsher sufferings than those who are most worthy of being reprimanded in time"
  },
  {
    "postId": 5,
    "id": 21,
    "name": "something softness of things who from consectetur him but",
    "email": "Noemie@marques.me",
    "body": "I will explain the pleasures or annoyances\nbut I do not know the reason for the pleasures and pains\nbut I will explain the pleasures and annoyances\nbut I will explain the reason for the pleasures and pain"
  },
  {
    "postId": 5,
    "id": 22,
    "name": "who here must be repelled or in time",
    "email": "Khalil@emile.co.uk",
    "body": "who herself hates our present pleasures\nwho does not hinder with who our something escapes I will explain\npleasure flees their pleasure exercise in times most worthy of distinction\nesse inventor reprove indeed as nothing happens necessities of things"
  },
  {
    "postId": 5,
    "id": 23,
    "name": "who is this, indeed, nothing of the times",
    "email": "Sophia@arianna.co.uk",
    "body": "pleasures provide repel just perceive from flee as\nut pain for something and easy pleasure\nsunt life that things in which\nor choose for which flee is"
  },
  {
    "postId": 5,
    "id": 24,
    "name": "in their time they were blessed",
    "email": "Jeffery@juwan.us",
    "body": "repudiation repels because\nsegui is pain I will explain nothing and\nbe and\nbe present this and rougher held"
  },
  {
    "postId": 5,
    "id": 25,
    "name": "but from her it is otherwise here provide it",
    "email": "Isaias_Kuhic@jarrett.net",
    "body": "are or which laborious is as it impedes\nadipisci harum laborum tota dulenti voluptas hates rem ea\nnon iure distinction as it will pains\net not from"
  },
  {
    "postId": 6,
    "id": 26,
    "name": "in the pacified are they who provide for the free reason of pardon than of the present",
    "email": "Russel.Parker@kameron.io",
    "body": "incidunt sapiente eaque dolor eos\nad est molestias\nquas sit et nihil exercitationem at cumque ullam\nnihil magnam et"
  },
  {
    "postId": 6,
    "id": 27,
    "name": "he loves him with certain pains and annoyances",
    "email": "Francesco.Gleason@nella.us",
    "body": "unless or which as labors reason\nrerum great him\nunde and pleasure often\npleasure of the body manner loves itself them often further"
  },
  {
    "postId": 6,
    "id": 28,
    "name": "where pleasures are pleasures but truth, the most worthy pains, as duties",
    "email": "Ronny@rosina.org",
    "body": "pleasure should be repelled, which is otherwise praised, softness indeed being, times resulting from the life of things, it is the body"
  },
  {
    "postId": 6,
    "id": 29,
    "name": "he loves pain, distinction",
    "email": "Jennings_Pouros@erica.biz",
    "body": "time is pleasure\ngreat distinction but pain\nand it hates the annoyance of things, and so the body has nothing for\nand the error of things"
  },
  {
    "postId": 6,
    "id": 30,
    "name": "as if we assume that no pleasure is easy or",
    "email": "Lurline@marvin.biz",
    "body": "consequently because pleasure is assumed and\naut pleasure is rejected, it is the mind that provides\nearum open wisely to life this\naaccusantium open his who pain pleasure and"
  },
  {
    "postId": 7,
    "id": 31,
    "name": "from the will that with his hatred to please",
    "email": "Buford@shaylee.biz",
    "body": "because it happens that something is so that things are pleasing to the right of the self because they are and seek pleasure and that they are rejected or"
  },
  {
    "postId": 7,
    "id": 32,
    "name": "pain to the architect so that he may bear what he undertakes",
    "email": "Maria@laurel.name",
    "body": "nothing that therefore free that\nooffices which which said inventor achieves pleasure pleasure\nobody but necessities will time\nothing will and times"
  },
  {
    "postId": 7,
    "id": 33,
    "name": "pleasure to the full or pleasure of all",
    "email": "Jaeden.Towne@arlene.tv",
    "body": "flees these which truly\nfree from time\nsolved and that fault to follow some no id\net and necessities"
  },
  {
    "postId": 7,
    "id": 34,
    "name": "all no one are from but",
    "email": "Ethelyn.Schneider@emelia.co.uk",
    "body": "at all times as if from all\neasy and all him which as if more or less right from the thing to reprehend\nin does not flee"
  },
  {
    "postId": 7,
    "id": 35,
    "name": "repel wisely all present things, some of which is itself a nuisance",
    "email": "Georgianna@florence.io",
    "body": "pain is indeed to make softness and\nor is to repudiate it is indeed pain but and\nrem because either are to be obtained"
  },
  {
    "postId": 8,
    "id": 36,
    "name": "who is it",
    "email": "Raheem_Heaney@gretchen.biz",
    "body": "or indeed it is\ndolor not or except the most worthy of it unless or which\naut great because ours provide great which ways most\npleasure and annoyance"
  },
  {
    "postId": 8,
    "id": 37,
    "name": "no one despises the pleasure of things that are blessed",
    "email": "Jacky@victoria.net",
    "body": "who loves something or\nsome greater things as because it is for being who\njustly despises who pleasure\pain distinction from times thing"
  },
  {
    "postId": 8,
    "id": 38,
    "name": "greater pains relieved",
    "email": "Piper@linwood.us",
    "body": "where pleasure who said\nor to or them error follows pleasure\nadipisci pains who is is or\nwill or and that reason will happen right escape"
  },
  {
    "postId": 8,
    "id": 39,
    "name": "needs reason or as choice which as",
    "email": "Gaylord@russell.net",
    "body": "and also follow pain are\nadipisci but also\npleasures and which necessities of things and things I will open our no one\negligent but and blessed and inventor"
  },
  {
    "postId": 8,
    "id": 40,
    "name": "not every little thing is pleasing to some people",
    "email": "Clare.Aufderhar@nicole.ca",
    "body": "which is less than others who\nendure the labor of suffering which as the body abandons life\nand seeks as well as any where rougher\nwith pleasure and"
  },
  {
    "postId": 9,
    "id": 41,
    "name": "pleasure soothed as",
    "email": "Lucio@gladys.tv",
    "body": "to do repudiate life or but in order to and\ndo nothing so that pleasures in\nsepe greediness of accusers never pains\ninventore are softness provident"
  },
  {
    "postId": 9,
    "id": 42,
    "name": "for who and",
    "email": "Shemar@ewell.name",
    "body": "or guilt seeks truth, they owe it to him, and he will explain and do his duties, and he will follow them with great reason and right, because the pains of the blessed are those who"
  },
  {
    "postId": 9,
    "id": 43,
    "name": "there are troubles, there is pleasure in the way",
    "email": "Jackeline@eva.tv",
    "body": "pleasure that we may labor which as a convenient delight\nin and follow\nin pleasure blessed annoyance\nest things labors and and and will be pain itself"
  },
  {
    "postId": 9,
    "id": 44,
    "name": "here the greatest annoyance and avoidance is that",
    "email": "Marianna_Wilkinson@rupert.io",
    "body": "who are convenient\nsint or option of life who who not distinction\nid quasi manner said\neos nothing be inventor is never duties"
  },
  {
    "postId": 9,
    "id": 45,
    "name": "but it's easy",
    "email": "Marcia@name.biz",
    "body": "the very hatred of these pleasures are both pains and laboriousness, nor is there any comfort which is never found in the body in the same way in life and time"
  },
  {
    "postId": 10,
    "id": 46,
    "name": "most worthy and delightfully pleased and that",
    "email": "Jeremy.Harann@waino.me",
    "body": "exercise and that which with all\npleasures of the accusers and indeed\nut itself are\pain and pain from that and necessities but"
  },
  {
    "postId": 10,
    "id": 47,
    "name": "things of convenience are not pain, they do not know how",
    "email": "Pearlie.Kling@sandy.com",
    "body": "blinded by reason of praise, not with what is not free, unless he wills, like pleasures, the praisers will follow pleasure, and pleasure is something, or as it is, and as it is"
  },
  {
    "postId": 10,
    "id": 48,
    "name": "it is often necessary to repel the pain of the mind, as it is either held or held",
    "email": "Manuela_Stehr@chelsie.tv",
    "body": "that and others indeed great pleasures\nab solved those who often corrupt here and\nwhen repel being\nnest are or truth offices follow with"
  },
  {
    "postId": 10,
    "id": 49,
    "name": "let things please which are less than just to choose",
    "email": "Camryn.Weimann@doris.io",
    "body": "that is the right of the blind, and similar, for repudiation, not anything expedited, except for the one who pleases, and perceives the greater option, not pain, or just wise"
  },
  {
    "postId": 10,
    "id": 50,
    "name": "the pains are indeed released from which the blinded are said or pains",
    "email": "Kiana_Predovic@yasmin.io",
    "body": "we accuse him either of being a delight in the architect's flattery because he despises these things, or of being a corrupt inventor of the soul's words or of the body"
  },
  {
    "postId": 11,
    "id": 51,
    "name": "bothersomeness and hatred as a benefit to all",
    "email": "Laurie@lincoln.us",
    "body": "to bear all being\npleasure is softness but to bear\nnone of us who\nor who except the pains of the soul hate that which"
  },
  {
    "postId": 11,
    "id": 52,
    "name": "but to be of pain",
    "email": "Abigail.OConnell@june.org",
    "body": "and for the whole pleasure of those who praise us is hindered by labor, for we are repelled by their softness, or by the one who repels them, who flees, or by the one whom we despise, who leads us to flee."
  },
  {
    "postId": 11,
    "id": 53,
    "name": "major other needs or not",
    "email": "Laverne_Price@scotty.info",
    "body": "a at time\ndiscomfort hates who pains annoyances pain and\nlaborious repudiation pleases anyone\naut open consectetur greater laborious ours"
  },
  {
    "postId": 11,
    "id": 54,
    "name": "his fault is that times follow and they do not abandon the law",
    "email": "Kenton_Vandervort@friedrich.com",
    "body": "and any thing when it is born and similar because\nwith it is but either the inventor\nprovides to follow the conveniences for the inventor to assume or or\ntimes we can solve because it follows the way it"
  },
  {
    "postId": 11,
    "id": 55,
    "name": "which is born because of pains",
    "email": "Hayden_Olson@marianna.me",
    "body": "enduring that and labor of praise so that annoyance is relieved and\ntrue hatred is not corrupted error is born and\nnot for because pleasures do not\nsoftness guilt makes pleasure accept pardon"
  },
  {
    "postId": 12,
    "id": 56,
    "name": "and the pain of the corrupt but the troubles",
    "email": "Vince_Crist@heidi.biz",
    "body": "when there is hatred, nothing is sought to reject it, because it is blinded, and it flees to the blessed, from which nothing indeed results in life"
  },
  {
    "postId": 12,
    "id": 57,
    "name": "who indeed but",
    "email": "Darron.Nikolaus@eulah.me",
    "body": "pain is caused by flight, but anyone who is corrupt, who is rejected, is an error, therefore, or is corrupt, something is to be done"
  },
      ],
    };
  },
};
</script>

<style scoped>
.comments-hero {
  text-align: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, #fdf3e7, #f9e4d2);
  border-bottom: 2px solid #eee;
}
.comments-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #5a2d0c;
}
.comments-hero p {
  font-size: 1.2rem;
  color: #444;
}

.comments-list {
  max-width: 900px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.comment-card {
  background: #fffaf5;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-align: left;
}
.comment-card h3 {
  margin: 0;
  color: #5a2d0c;
}
.comment-card .email {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 10px;
}
.comment-card .message {
  font-size: 1.05rem;
  color: #333;
  font-style: italic;
  line-height: 1.5;
}
</style>
