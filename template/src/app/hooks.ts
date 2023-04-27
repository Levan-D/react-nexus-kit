/** @format */

import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import type { RootState, AppDispatch } from "./store"

/**
 * Use pre-typed useDispatch and useSelector hooks for convenience and better type handling.
 * - useSelector: No need to type (state: RootState) every time.
 * - useDispatch: Handles thunks and middleware with the customized AppDispatch type.
 * Define these hooks in a separate file (e.g., app/hooks.ts) to avoid circular import dependency issues.
 */

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
