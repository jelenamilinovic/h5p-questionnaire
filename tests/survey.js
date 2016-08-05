import Survey from '../src/scripts/survey';
import 'expose?H5P!exports?H5P!h5p-view';

describe('Survey', () => {
  const params = {
    "surveyElements": [
      {
        "params": {
          "text": "<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me?\" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops<\/p>\n"
        },
        "library": "H5P.Text 1.1"
      },
      {
        "params": {
          "contentName": "Image",
          "file": {
            "path": "domokun.png",
            "mime": "image\/png",
            "copyright": {
              "license": "U"
            },
            "width": 400,
            "height": 382
          },
          "alt": "h5p image"
        },
        "library": "H5P.Image 1.0"
      },
      {
        "params": {
          "taskDescription": "<p>What is your name ?<\/p>\n",
          "placeholderText": "Ola Nordmann",
          "inputFieldSize": "3",
          "requiredField": false
        },
        "library": "H5P.TextInputField 1.0"
      }
    ]
  };

  var $body = H5P.jQuery('body');

  beforeEach(() => {
    spyOn(H5P, 'newRunnable');
    const survey = new Survey(params);
    survey.attach($body);
  });

  // Check that attach is called
  it('should attach to the $wrapper', () => {
    let surveyElement = $body.get(0).querySelectorAll('.h5p-survey');
    expect(surveyElement[0].parentNode).toBe($body.get(0));
  });

  // Check that all survey elements are called with newRunnable
  it('should attach all survey elements', () => {
    expect(H5P.newRunnable).toHaveBeenCalledTimes(3);
  });
});
