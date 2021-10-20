export default schema = {
    type: 'object',
    required: true,
    properties: {
        title: {
            type: 'string',
            required: true
        },
        author: {
            type: 'object',
            required: true,
            properties: {
                name: {
                    type: 'string',
                    required: true
                },
                age: {
                    type: 'integer',
                    required: true
                },
                city: {
                    type: 'string'
                }
            }
        },
        related_titles: {
            type: 'array',
            required: true,
            items: {
                type: 'string'
            }
        }
    }
};