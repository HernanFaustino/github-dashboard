import type { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from 'octokit';

type Data = {
  status: 'failed' | 'aborted' | 'success';
  data: Commit[]
}
const octokit = new Octokit({
  auth: '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'
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

 const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
    owner: 'HernanFaustino',
    repo: 'github-dashboard',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
  const commitList = response.data as Commit[];
  res.status(200).json({ status: 'success', data: commitList })
}
