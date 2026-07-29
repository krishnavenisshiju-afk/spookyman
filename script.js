// Local vote tracking
const votes = { Tobey: 0, Andrew: 0, Tom: 0 };

function addVote(actor) {
    votes[actor]++;
    document.getElementById(`votes-${actor}`).innerText = `${votes[actor]} votes`;
}

// Comment handling
document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('username').value;
    const favorite = document.getElementById('favorite').value;
    const text = document.getElementById('userComment').value;
    
    const container = document.getElementById('commentsContainer');
    
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment-box';
    commentDiv.innerHTML = `<strong>${name}</strong> <em>(${favorite})</em>: <p>${text}</p>`;
    
    container.prepend(commentDiv);
    
    // Clear form
    document.getElementById('username').value = '';
    document.getElementById('userComment').value = '';
});