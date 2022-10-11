import express from 'express'
import { Octokit } from "@octokit/rest";
const app = express();

const octokit = new Octokit({
  auth: 'Github Token'
})

app.get("/", async function(req, res) {
  const {data} = await octokit.request('GET /repos/Luosunce/material-design-data/stargazers', {
    owner: 'OWNER',
    repo: 'REPO'
  })

  let profile_urls = data.map(t => t.url);

  res.send(profile_urls);
  });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});