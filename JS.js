console.log("This is my index.js");
 "data" = [
  {
    name: "Leanne Graham",
    post: "because he receives and accepts the accepted consequences that are unencumbered and when he finds annoyance",
    comment: "for it is as if it were a great pleasure indeed for those who praise Him times in which the pain of the necessities, and how it is like to renounce and for the wise accusing Him",
  },

 {
    name: "Romaguera-Crona",
    post: "it is the time of life to pursue the things that are to be blamed for the pain of a blessed one, nor avoid the pleasures of flattery, nor any further annoyance to reject one",
    comment: "for nothing is born of pain, all pleasure is never",
  },

  {
    name: "Antonette",
    post: "and who is blinded by the pleasure of the just but by what right to choose, or to the pleasure of the pains or the accusers?",
    comment: "because he accuses me of annoyance, as if he despises the unencumbered",
  },


  {
    name: "Deckow-Crist",
    post: "to obtain any pleasure by rejecting one's love and often taking care of things is a fault\nobody is obliged to know the thing and the pain itself is right\nobody wants the pleasure of things",
    comment: "because he accuses me of annoyance, the unencumbered",
  },
  {
    name: "Clementine Bauch",
    post: "to be rejected is to seek pardon but to be rejected or to escape",
    comment: "because he accuses me of annoyance, as if he despises ",
  },
  {
    name: "Romaguera-Jacobson",
    post: "so that no one will reject the body of these women, they foresee nothing to follow, nudge us some uneasiness, and no one will find fault with those who accuse us, which by pleasure he wills pain and pain and uneasiness",
    comment: "of these, not as if and by reason, by the right of time",
  },
  {
    name: "Patricia Lebsack",
    post: "the pain may please some people in the life where it is important for anyone who is anyone whither no one will ever drive back, to receive them because they want to follow them but which they are",
    comment: " he accuses me of annoyance",
  },
  {
    name: "Robel-Corkery",
    post: "I will open the pain to those worthy of being easily accepted by some minds who are able to be able to welcome the great ancestors when there has been no such thing as the pain of the pleasures or the life's advantage",
    comment: "they foresee nothing to follow, nudge us some uneasiness, and no one will find fault with those who accuse us",
  },
]


let len = data.length;
console.log(len);
// POST Iterator
/*const posts = postIterator(data);

function postIterator(users) 
{
  console.log(users)
  let nextIndex = 0;
  return {
    next: function () {
      if (nextIndex < users.length)
        return { value: users[nextIndex++], done: false }
      else { done: true }
    }
  };
}

*/
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextPost);



function nextPost() {
  let userData = document.getElementById('User');
  let post2 = document.getElementById('Post');
  let com = document.getElementById('Comment');
  {
    let i = 0;
    while (i != undefined) {
      userData.innerHTML = data[i].name;
      post2.innerHTML = data[i].post;
      com.innerHTML = data[i].comment;

      console.log(data[i].name, data[i].post, data[i].comment)
      i++;
    }

  }

}
