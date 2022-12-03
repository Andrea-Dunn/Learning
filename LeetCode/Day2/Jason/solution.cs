public class Solution {
    /*
        Note that this solution functions accurately but does not perform well.  Only 202 / 212 automated tests pass.  
        Gotta make this logic a lot more efficient.

        I think I can do this by combining all the logic into one loop.  
        Keep track of lowest value as you go.  Don't need to re-run the analysis for day 2 if it's $2 higher than day 1, for instance
    */
    public int MaxProfit(int[] prices) {
        int maxDiffAcrossAllDays = 0;
        for (int i = 0; i < prices.Length; i++)
        {
            int smallDiff = computeMaxProfit(prices, i);
            if (smallDiff > maxDiffAcrossAllDays)
            {
                maxDiffAcrossAllDays = smallDiff;
            }
        }
        
        return maxDiffAcrossAllDays;
    }
    
    private int computeMaxProfit(int[] prices, int startingIndex)
    {
        int startingPrice = 0;
        int maxDiff = 0;

        startingPrice  = prices[startingIndex];
        
        for (int i = startingIndex; i < prices.Length; i++)
        {
            int localDiff = prices[i] - startingPrice;
            if (localDiff > maxDiff)
            {
                maxDiff = localDiff;
            }
        }
        
        return maxDiff;
    }
}