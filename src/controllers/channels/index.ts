import { Request, Response } from 'express';
import { getChannelMessagesService, postChannelMessageService } from '../../services/channels';

export async function getMessagesController(
  req: Request,
  res: Response
) {
  const { id } = req.params;
  try {
    const { data } = await getChannelMessagesService(id);
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: 'Error' });
  }
}

export async function postMessageController(
  req: Request,
  res: Response
) {
  const { id } = req.params;
  try {
    const { data } = await postChannelMessageService('62acc06a8a09abe39fae6df5', id, "test");
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: 'Error' });
  }
}
