export const data = [
  {
    blocks: [
      {
        plainText: 'I AM PARENT_LEVEL_0',
        annotations: {
          bold: false,
          italic: true,
          strikethrough: false,
          underlined: true,
        },
      },
      {
        plainText: 'I AM PARENT_LEVEL_1',
        annotations: {
          bold: true,
          italic: false,
          strikethrough: false,
          underlined: false,
        },
        blocks: [
          {
            plainText: 'I AM CHILD_LEVEL_1.0',
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underlined: false,
            },
            blocks: [],
          },
          {
            plainText: 'I AM CHILD_LEVEL_1.1',
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underlined: true,
            },
            blocks: [
              {
                plainText: 'I AM GRAND_CHILD_LEVEL_1.1.0',
                annotations: {
                  bold: true,
                  italic: false,
                  strikethrough: false,
                  underlined: false,
                },
                blocks: [],
              },
              {
                plainText: 'I AM GRAND_CHILD_LEVEL_1.1.1',
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: true,
                  underlined: false,
                },
                blocks: [],
              },
              {
                plainText: 'I AM GRAND_CHILD_LEVEL_1.1.2',
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underlined: false,
                },
                blocks: [],
              },
            ],
          },
        ],
      },
      {
        plainText: 'I AM PARENT_LEVEL_2',
        annotations: {
          bold: false,
          italic: false,
          strikethrough: true,
          underlined: false,
        },
        blocks: [
          {
            plainText: 'I AM CHILD_LEVEL_2.0',
            annotations: {
              bold: false,
              italic: true,
              strikethrough: false,
              underlined: false,
            },
            blocks: [],
          },
          {
            plainText: 'I AM CHILD_LEVEL_2.1',
            annotations: {
              bold: false,
              italic: true,
              strikethrough: false,
              underlined: false,
            },
            blocks: [
              {
                plainText: 'I AM GRAND_CHILD_LEVEL_2.1.0',
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underlined: false,
                },
                blocks: [],
              },
              {
                plainText: 'I AM GRAND_CHILD_LEVEL_2.1.1',
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underlined: false,
                },
                blocks: [],
              },
              {
                plainText: 'I AM GRAND_CHILD_LEVEL_2.1.2',
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underlined: false,
                },
                blocks: [],
              },
            ],
          },
          {
            plainText: 'I AM CHILD_LEVEL_2.2',
            annotations: {
              bold: true,
              italic: true,
              strikethrough: false,
              underlined: false,
            },
            blocks: [
              {
                plainText: 'I AM GRAND_CHILD_LEVEL_2.2.0',
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underlined: true,
                },
                blocks: [
                  {
                    plainText: 'I AM GREAT_GRAND_CHILD_LEVEL_2.2.0.0',
                    annotations: {
                      bold: true,
                      italic: true,
                      strikethrough: false,
                      underlined: false,
                    },
                  },
                  {
                    plainText: 'I AM GREAT_GRAND_CHILD_LEVEL_2.2.0.1',
                    annotations: {
                      bold: true,
                      italic: true,
                      strikethrough: false,
                      underlined: false,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
