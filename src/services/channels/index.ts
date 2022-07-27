import axios from "axios";
import { User } from "../../database/schemas";
import { DISCORD_API_URL } from '../../utils/constants';
import { PartialMessage } from "../../utils/types";

export async function getChannelMessagesService(channelId: string) {
    const TOKEN = process.env.DISCORD_BOT_TOKEN;
    return axios.get<PartialMessage[]>(`${DISCORD_API_URL}/channels/${channelId}/messages?limit=100`, {
        headers: { Authorization: `Bot ${TOKEN}`}
    });
}

export async function postChannelMessageService(userId: string, channelId: string, message: string) {
    const user = await User.findById(userId);
    return axios.post(`${DISCORD_API_URL}/channels/${channelId}/messages`, {
        headers: { Authorization: `Bearer ${user?.accessToken}`},
        content: message
    });
}