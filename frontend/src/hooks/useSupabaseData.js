import { useState, useEffect } from 'react'
import { toolsService } from '../services/toolsService'
import { favoritesService } from '../services/favoritesService'
import { promptsService } from '../services/promptsService'
import { historyService } from '../services/historyService'

// Custom hook for fetching tools
export function useTools() {
  const [tools, setTools] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchTools() {
      setLoading(true)
      const { tools: data, error: err } = await toolsService.getAllTools()
      if (err) {
        setError(err)
      } else {
        setTools(data || [])
      }
      setLoading(false)
    }
    fetchTools()
  }, [])

  return { tools, loading, error, refetch: () => fetchTools() }
}

// Custom hook for categories
export function useCategories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true)
      const { categories: data, error: err } = await toolsService.getAllCategories()
      if (err) {
        setError(err)
      } else {
        setCategories(data || [])
      }
      setLoading(false)
    }
    fetchCategories()
  }, [])

  return { categories, loading, error }
}

// Custom hook for user favorites
export function useFavorites(userId) {
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!userId) {
      setFavorites([])
      setLoading(false)
      return
    }

    async function fetchFavorites() {
      setLoading(true)
      const { favorites: data, error: err } = await favoritesService.getUserFavorites(userId)
      if (err) {
        setError(err)
      } else {
        setFavorites(data || [])
      }
      setLoading(false)
    }
    fetchFavorites()
  }, [userId])

  const addFavorite = async (toolId) => {
    if (!userId) return { error: 'User not logged in' }
    const result = await favoritesService.addFavorite(userId, toolId)
    if (!result.error) {
      const { favorites: data } = await favoritesService.getUserFavorites(userId)
      setFavorites(data || [])
    }
    return result
  }

  const removeFavorite = async (toolId) => {
    if (!userId) return { error: 'User not logged in' }
    const result = await favoritesService.removeFavorite(userId, toolId)
    if (!result.error) {
      const { favorites: data } = await favoritesService.getUserFavorites(userId)
      setFavorites(data || [])
    }
    return result
  }

  return { favorites, loading, error, addFavorite, removeFavorite }
}

// Custom hook for saved prompts
export function useSavedPrompts(userId) {
  const [prompts, setPrompts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!userId) {
      setPrompts([])
      setLoading(false)
      return
    }

    async function fetchPrompts() {
      setLoading(true)
      const { prompts: data, error: err } = await promptsService.getUserPrompts(userId)
      if (err) {
        setError(err)
      } else {
        setPrompts(data || [])
      }
      setLoading(false)
    }
    fetchPrompts()
  }, [userId])

  const savePrompt = async (toolId, promptText, parameters) => {
    if (!userId) return { error: 'User not logged in' }
    const result = await promptsService.savePrompt(userId, toolId, promptText, parameters)
    if (!result.error) {
      const { prompts: data } = await promptsService.getUserPrompts(userId)
      setPrompts(data || [])
    }
    return result
  }

  const deletePrompt = async (promptId) => {
    if (!userId) return { error: 'User not logged in' }
    const result = await promptsService.deletePrompt(promptId, userId)
    if (!result.error) {
      const { prompts: data } = await promptsService.getUserPrompts(userId)
      setPrompts(data || [])
    }
    return result
  }

  return { prompts, loading, error, savePrompt, deletePrompt }
}

// Custom hook for user history
export function useHistory(userId) {
  const [recentTools, setRecentTools] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!userId) {
      setRecentTools([])
      setLoading(false)
      return
    }

    async function fetchHistory() {
      setLoading(true)
      const { tools: data, error: err } = await historyService.getRecentTools(userId)
      if (err) {
        setError(err)
      } else {
        setRecentTools(data || [])
      }
      setLoading(false)
    }
    fetchHistory()
  }, [userId])

  const trackUsage = async (toolId, promptUsed) => {
    if (!userId) return
    await historyService.trackToolUsage(userId, toolId, promptUsed)
    // Refresh recent tools
    const { tools: data } = await historyService.getRecentTools(userId)
    setRecentTools(data || [])
  }

  return { recentTools, loading, error, trackUsage }
}

