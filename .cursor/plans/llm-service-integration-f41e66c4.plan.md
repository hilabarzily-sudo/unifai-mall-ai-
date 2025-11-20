<!-- f41e66c4-3544-4a91-a61f-254050dea55b 33ac92df-3959-4b70-813d-92abbbeec415 -->
# LLM Service Integration Plan

## 1. Create Core LLM Service

Create `src/services/llmService.js` with:

- **Claude Integration** (Anthropic API) - for detailed assistance and understanding
- **OpenAI Integration** (GPT-4 & GPT-3.5-turbo) - for creative content and fast queries
- **Smart Router** - automatically chooses the best model based on task
- **Cost Optimization** - caching, token limits, and model selection strategy
- **Error Handling** - robust error handling with fallbacks

Key functions:

- `askClaude(prompt, maxTokens)` - Claude Sonnet for complex queries
- `askGPT(prompt, model, temperature)` - OpenAI for creative/fast tasks
- `smartQuery(query, context)` - intelligent routing
- `recommendTools(userQuery, allTools)` - AI-powered tool recommendations
- `generatePrompts(tool)` - auto-generate prompts for a tool
- `intelligentSearch(query, tools, regularResults)` - semantic search fallback

## 2. Enhance SearchPage Component

Update `11-SearchPage.jsx`:

- **Detect Question Patterns** - identify when user asks a question vs searches
  - Questions: "אני צריך...", "איך ל...", "מה הכלי הטוב ביותר ל..."
  - Regular: tool names, categories, single words

- **Hybrid Search Logic**:

  1. Run regular filter search first
  2. If results < 3 tools OR query is a question → trigger AI search
  3. Show AI recommendations with explanation badges

- **Visual Indicators**:
  - "🤖 המלצות AI" badge for AI results
  - Loading state during AI search
  - Toggle between regular/AI results

## 3. Add Prompt Generator to ToolPage

Update `04-ToolPage.jsx`:

- Add "✨ צור פרומפטים" button in the tool header/actions area
- Button triggers `generatePrompts()` from llmService
- Shows loading state with spinner
- Displays 3-5 generated prompts in cards
- Each prompt has "שמור" button → saves to `saved_prompts` table
- Uses GPT-4 for creative, high-quality prompts

## 4. Cost Optimization Strategy

**Token Management**:

- Max 500 tokens for tool recommendations (GPT-3.5: ~$0.0005/call)
- Max 300 tokens for prompt generation (GPT-4: ~$0.009/call)
- Max 200 tokens for semantic search (GPT-3.5: ~$0.0003/call)

**Caching Strategy**:

- Cache tool recommendations by query hash (24h expiry)
- Cache generated prompts per tool in database
- Skip AI if cache exists

**Model Selection**:

- GPT-3.5-turbo: semantic search, simple recommendations ($0.0005-0.002/1K tokens)
- GPT-4: prompt generation only ($0.03/1K tokens input, $0.06/1K output)
- Claude Sonnet: detailed tool assistance if needed ($0.003/1K tokens)

**Estimated Monthly Costs** (100 users, moderate usage):

- ~300 AI searches/month: $0.15-0.60
- ~50 prompt generations/month: $0.45-1.50
- Total: **$0.60-2.10/month** (very affordable)

## 5. Environment Variables

Ensure `.env` file has:

```
VITE_OPENAI_API_KEY=...
VITE_ANTHROPIC_API_KEY=...
```

Note: Keys are already in ENV_SETUP_INSTRUCTIONS.md

## 6. Implementation Files

Files to create:

- `src/services/llmService.js` (new)

Files to modify:

- `11-SearchPage.jsx` (enhance with AI)
- `04-ToolPage.jsx` (add prompt generator button)
- `App.jsx` (import and pass llmService if needed)

## Key Features Summary

1. **Intelligent Search**: Understands "אני צריך כלי לעריכת וידאו" → recommends video editing tools
2. **Hybrid Approach**: Uses AI only when regular search fails (saves costs)
3. **Prompt Generator**: Click button → get 5 creative prompts for any tool
4. **Cost-Effective**: ~$1-2/month for moderate usage
5. **Graceful Degradation**: If API fails, falls back to regular search

## Additional Optimization Ideas

- **Rate Limiting**: Max 10 AI queries per user per hour
- **Debouncing**: Wait 1 second before triggering AI search
- **Local Storage Cache**: Store recent AI results in browser
- **Batch Processing**: Generate prompts for multiple tools at once
- **A/B Testing**: Track when users prefer AI vs regular results

### To-dos

- [ ] Create src/services/llmService.js with Claude, OpenAI, and smart routing logic
- [ ] Implement caching, token limits, and model selection strategy in llmService
- [ ] Add question detection logic to SearchPage to identify when to use AI
- [ ] Update SearchPage with hybrid search that falls back to AI when regular search fails
- [ ] Add prompt generator button and UI to ToolPage component
- [ ] Connect prompt generator button to llmService and handle saving prompts
- [ ] Test caching and verify API costs are within budget