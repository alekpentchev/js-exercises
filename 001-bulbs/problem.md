
# Problem description

Your task is to determine how many times bulbs were shining.
You'll be given a collection of integers from 1 to N, e.g.:

`const A = [1,3,4,5,2]`

Each number means the number of the bulb in a row. The order of the collection shows the order of switching on the bulbs.
 Given `A = [1,3,4,5,2]` means that the 1st bulb gets switched on, then the 3rd one, 4th one and so on.  

There is a requirement - a bulb is shining only when all previous bulbs are shining too.

Please count how many times you'll observe bulbs shining.

## Example

Given `A = [1,3,4,5,2]` the expected outcome is 2 because:

1. 1st bulb is switched on. There's no other before it. Let it shine.
2. The 3rd bulb gets switched on. It won't shine because the 2nd one is not shining.
3. The 4th bulb gets switched on. It won't shine because the 3rd one is not shining.
4. The 5th bulb gets switched on. It won't shine because the 4th one is not shining.
5. The 2nd bulb gets switched on. All bulbs are shining now because the 1st is shining so the 2nd can, too. Same for the remaining ones.

Good luck. :)
