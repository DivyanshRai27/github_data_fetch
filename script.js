import express from 'express'
import { Octokit } from "@octokit/rest";
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

const octokit = new Octokit({
  auth: 'Github Token'
})

app.get("/", async function(req, res) {
  const {repo, owner} = req.body;
  
  const {data} = await octokit.request(`GET /repos/${owner}/${repo}/stargazers`, {
    owner: 'OWNER',
    repo: 'REPO'
  })

  let profile_urls = data.map(t => t.url);

  res.send(profile_urls);
  });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});