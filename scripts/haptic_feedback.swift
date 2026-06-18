import AppKit

guard let input = readLine() else {
    exit(EXIT_SUCCESS)
}

var pattern: NSHapticFeedbackManager.FeedbackPattern = .generic
switch input.trimmingCharacters(in: .whitespacesAndNewlines) {
case "alignment":
    pattern = .alignment
case "levelChange":
    pattern = .levelChange
default:
    pattern = .generic
}

NSHapticFeedbackManager.defaultPerformer.perform(
    pattern,
    performanceTime: .now
)
