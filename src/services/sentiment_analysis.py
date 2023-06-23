from transformers import pipeline
classifier = pipeline("zero-shot-classification",
                      model="facebook/bart-large-mnli")


def classify_sequence(sequence, num_labels, candidate_labels=['sports', 'music', 'art', 'business', 'science', 'tech', 'other']):
    pass


if __name__ == "__main__":
    sequence_to_classify = "one day I will see the world"
    candidate_labels = ['travel', 'cooking', 'dancing']
    output = classifier(sequence_to_classify, candidate_labels)

    num_labels_to_return = 2
    # assuming scores are unique
    scores_to_labels = {score: label for score,
                        label in zip(output['scores'], output['labels'])}
    top_k_scores = sorted(output['scores'], reverse=True)[
        :num_labels_to_return]
    top_k_labels = [scores_to_labels[scores] for scores in top_k_scores]
