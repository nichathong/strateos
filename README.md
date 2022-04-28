# Strateos Excericse

## Moving containers with a robotic arm

### Strategies

1. Convert string(containers) into meaningful ineteger and rank them
  * Take in container and use helper functions to convert integers correspondind to the position of the alphabets and rank them
    * I created a function convertToNumber(letters) passing in alphabet letters that handling both lowerCasease and upperCase. The function convert these letters into number and underscore will represent number 27 (as alphabet only have 26) 
    * I created a function rankPosition(arr) passing in an array from a function convertToNumber() to rank an array elements from smallest to biggest 

2. Iterate through the ranked array
    <dl>
    <dt>First condition</dt>
    <dd>If an element IS NOT equal to the correct position AND underScoreIndex IS NOT the of the array<./dd>
    <dt>Second condition</dt>
    <dd>If an element IS NOT equal to the correct position AND underScoreIndex IS the of the array</dd>
    </dl>
3. Swap each element where the startIdx is equal the index of unoccupied holder(underscore)
4. Return startIdx and endIdx


