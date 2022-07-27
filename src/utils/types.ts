export type PartialGuild = {
    id: string, 
    name: string,
    icon: string,
    owner: boolean,
    permissions: string,
    features: string[]
};

export type PartialChannel = {
    id: string,
    type: number,
    guild_id?: string,
    postion: number,
    name: string,
}

export type PartialMessage = {
    id: string,
    channel_id: string,
    author: DiscordUser,
    content: string,
    timestamp: Date,
    edited_timestamp: Date,
    tts: boolean,
    mention_everyone: boolean,
    mentions: DiscordUser[],
    mention_roles: DiscordRole["id"],
    mention_channels?: ChannelMention[],
    attachments: Attachment[],
    embeds: Embed[],
    reactions?: Reaction[],
    nonce?: number | string,
    pinned: boolean,
    webhook_id?: string,
    type: number
}

export type DiscordUser = {
    id: string,
    username: string,
    discriminator: string,
    avatar: string,
    email: string,
}

export type DiscordRole = {
    id: string,
    name: string,
}

export type ChannelMention = {
    id: string,
    guild_id: string,
    type: number,
    name: string,
}

export type Attachment = {
    id: string,
    filename: string,
    description?: string,
    content_type?: string,
    size: number,
    url: string,
    proxy_url: string,
    height?: number,
    width: number,
    ephemeral?: boolean
}

export type Embed = {
    title?: string,
    type?: number,
    description?: string,
    url?: string,
    timestamp?: Date,
    color?: number,
}

export type Reaction = {
    count: number,
    me: boolean,
    emoji: Emoji
}

export type Emoji = {
    id: string,
    name: string
}