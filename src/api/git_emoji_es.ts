interface Emoji {
    readonly emoji: any;
    readonly entity?: any;
    readonly code: any;
    readonly description: any;
    readonly name: any;
}

let emojis: Array<Emoji> = [
    {
        emoji: '🎨',
        entity: '&#x1f3a8;',
        code: ':art:',
        description: 'Improving structure / format of the code.',
        name: 'art',
    },
    {
        emoji: '⚡️',
        entity: '&#x26a1;',
        code: ':zap:',
        description: 'Improving performance.',
        name: 'zap',
    },
    {
        emoji: '🔥',
        entity: '&#x1f525;',
        code: ':fire:',
        description: 'Removing code or files.',
        name: 'fire',
    },
    {
        emoji: '🐛',
        entity: '&#x1f41b;',
        code: ':bug:',
        description: 'Fixing a bug.',
        name: 'bug',
    },
    {
        emoji: '🚑',
        entity: '&#128657;',
        code: ':ambulance:',
        description: 'Critical hotfix.',
        name: 'ambulance',
    },
    {
        emoji: '✨',
        entity: '&#x2728;',
        code: ':sparkles:',
        description: 'Introducing new features.',
        name: 'sparkles',
    },
    {
        emoji: '📝',
        entity: '&#x1f4dd;',
        code: ':pencil:',
        description: 'Writing docs.',
        name: 'pencil',
    },
    {
        emoji: '💄',
        entity: '&#ff99cc;',
        code: ':lipstick:',
        description: 'Updating the UI and style files.',
        name: 'lipstick',
    },
    {
        emoji: '🎉',
        entity: '&#127881;',
        code: ':tada:',
        description: 'Initial commit.',
        name: 'tada',
    },
    {
        emoji: '🔖',
        entity: '&#x1f516;',
        code: ':bookmark:',
        description: 'Releasing / Version tags.',
        name: 'bookmark',
    },

    {
        emoji: '🚧',
        entity: '&#x1f6a7;',
        code: ':construction:',
        description: 'Work in progress.',
        name: 'construction',
    },

    {
        emoji: '♻️',
        entity: '&#x2672;',
        code: ':recycle:',
        description: 'Refactoring code.',
        name: 'recycle',
    },

    {
        emoji: '🔧',
        entity: '&#x1f527;',
        code: ':wrench:',
        description: 'Changing configuration files.',
        name: 'wrench',
    },

    {
        emoji: '🌐',
        entity: '&#127760;',
        code: ':globe_with_meridians:',
        description: 'Internationalization and localization.',
        name: 'globe-with-meridians',
    },

    {
        emoji: '✏️',
        entity: '&#59161;',
        code: ':pencil2:',
        description: 'Fixing typos.',
        name: 'pencil',
    },

    {
        emoji: '⚗',
        entity: '&#128248;',
        code: ':alembic:',
        description: 'Experimenting new things',
        name: 'alembic',
    },
];
export default emojis;
